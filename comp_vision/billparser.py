import c_v

BILL_MARK = ['БАНК', 'ЧЕК', 'ОПЕРАЦИЯ', 'ИТОГ']
USEFULL = ['=', ':', '\n', ',', '.', ' ']
FIO = ['ФИО ПЛАТЕЛЬЩИКА:', 'ФИО ПЛАТЕЛЬЩИКА']

MARK_SUM = ['СУММА ОПЕРАЦИИ:', 'СУММА ПЛАТЕЖА:', 'СУММА ОПЕРАЦИИ', 'СУММА', 'ИТОГ', '=']


class BillParser:
    def __init__(self):
        self.text = ''
        self.splitted_text = ''

    def load_data(self, img):
        self.text = c_v.load_text_from_img(img)
        self._clear_text()
        self.splitted_text = self.text.split("\n")

    def get_full_name(self):
        fio = ''

        for i in range(len(self.splitted_text)):
            for name_mark in FIO:
                if self.splitted_text[i].find(name_mark) > -1:
                    if self.splitted_text[i] == name_mark:
                        fio = self.splitted_text[i + 1]
                    else:
                        fio = self.splitted_text[i].split(name_mark)[1]
                        if len(fio) < 10:
                            fio = self.splitted_text[i + 1]
                    if len(fio.split(sep=' ')) < 2:
                        fio = ''
                    break

            if len(fio) > 0:
                break

        if len(fio) < 5:
            fio = False
            #TODO
            raise #имя не нашлось

        return fio

    def get_amount(self):
        s = ''
        for i in range(len(self.splitted_text)):
            for sum_mark in MARK_SUM:
                if self.splitted_text[i].find(sum_mark) > -1:
                    s = -1
                    if self.splitted_text[i] == sum_mark:
                        s = self.splitted_text[i + 1]
                    else:
                        s = self.splitted_text[i].split(sum_mark)[1]

                    s = self._is_amount(s)
                    if s:
                        break
        if not s:
            #TODO
            raise #сумма не нашлась
        return s

    # похожесть чека на чек, подтверждает что нормальное фото чека похоже на чек, даже если там данные не опознались.
    def is_bill(self):
        mark = False
        for i in BILL_MARK:
            mark = mark or (i in self.text)
        return mark

    # на случай если в чеке не нашлось ФИО, можно проверить что оно совпадает с данными отправителя
    def is_belong(self, fullname):
        fullname = fullname.upper()
        fullname = fullname.split(' ')
        for i in fullname:
            if i in self.text:
                return True
        return False

    def _is_amount(self, s):
        while len(s) > 0:
            if not s[-1].isdigit():
                s = s[0:len(s) - 1]
            else:
                break
        if s.find(' ') > 0:
            s = s.split(' ')[1]

        try:
            return float(s)
        except ValueError:
            return False

    def _clear_text(self):
        for i in self.text:
            if not ((i in USEFULL) or i.isdigit() or i.isalpha()):
                self.text = self.text.replace(i, '')

        while "  " in self.text:
            self.text = self.text.replace("  ", " ")

        self.text = self.text.upper()
