import c_v

#маркеры после которых идет нужная информация. капс важен
FIO = ['ФИО ПЛАТЕЛЬЩИКА:', 'ФИО ПЛАТЕЛЬЩИКА']
MARK_SUM = ['СУММА ОПЕРАЦИИ:', 'СУММА ПЛАТЕЖА:', 'СУММА ОПЕРАЦИИ', 'СУММА', 'ИТОГ']

USELESS = ['%', '&', '~', '$', '>', '<']

def get_info_from_img(img_name):
    text = c_v.load_text_from_img(img_name)
    text = str(text)
    for i in USELESS:
        text = text.replace(i, '')

    text = text.upper()
    arr = text.split("\n")

    while True:
        try:
            arr.remove('')
        except ValueError:
            break

    if 'ПАО "БАНК "САНКТ-ПЕТЕРБУРГ.' in arr:
        fio = arr[27]
        s = arr[32]
    else:
        fio = ""
        for i in range(len(arr)):
            for name_mark in FIO:
                if arr[i].find(name_mark) > -1:
                    if arr[i] == name_mark:
                        fio = arr[i+1]
                    else:
                        fio = arr[i].split(name_mark)[1]
                        if len(fio) < 10:
                            fio = arr[i + 1]
                    break
            if len(fio) > 0:
                break

        s = ""
        for i in range(len(arr)):
            for sum_mark in MARK_SUM:
                if arr[i].find(sum_mark) > -1:
                    if arr[i] == sum_mark:
                        s = arr[i + 1]
                    else:
                        s = arr[i].split(sum_mark)[1]

                    break
            if len(s) > 0:
                break


    while len(s) > 0:
        if not s[-1].isdigit():
            s = s[0:len(s)-1]
        else:
            break
    if s.find(' ') > 0:
        s = s.split(' ')[1]

    return fio, s


if __name__ == "__main__":
    fio, sum = get_info_from_img('photo_2020-12-01_21-30-51.jpg')
    print("Фио:", fio)
    print("Сумма оплаты:", sum)
