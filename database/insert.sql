

INSERT INTO commands (id, name, is_active) VALUES (1, 'shower', 1);
INSERT INTO commands (id, name, is_active) VALUES (2, 'commandant', 1);
INSERT INTO commands (id, name, is_active) VALUES (7, 'castellan', 1);
INSERT INTO commands (id, name, is_active) VALUES (8, 'gym', 1);
INSERT INTO commands (id, name, is_active) VALUES (9, 'study_room', 1);
INSERT INTO commands (id, name, is_active) VALUES (10, 'guests', 1);
INSERT INTO commands (id, name, is_active) VALUES (11, 'laundry', 1);
INSERT INTO commands (id, name, is_active) VALUES (21, 'duty', 1);
INSERT INTO commands (id, name, is_active) VALUES (22, 'question', 1);
INSERT INTO commands (id, name, is_active) VALUES (23, 'greeting', 1);
INSERT INTO commands (id, name, is_active) VALUES (24, 'parting', 1);
INSERT INTO commands (id, name, is_active) VALUES (25, 'gratitude', 1);
INSERT INTO commands (id, name, is_active) VALUES (26, 'opportunities', 1);
INSERT INTO commands (id, name, is_active) VALUES (27, 'invoice', 1);
INSERT INTO commands (id, name, is_active) VALUES (28, 'topical', 1);
INSERT INTO commands (id, name, is_active) VALUES (29, 'registration', 1);
INSERT INTO commands (id, name, is_active) VALUES (30, 'joke', 1);

INSERT INTO command_responses (id, response, command_id) VALUES (1, 'В спортивный зал, расположенный на первом этаже общежития, можно записаться по ссылке ниже.\nhttps://docs.google.com/forms/d/e/1FAIpQLSdiOUQKZfRVQvxDb67LogKQ0SCUa0lQuDPd6mZg2UEz4jZ4MQ/viewform\nДля посещения необходимо убраться в зале в указанную дату и скинуть фотоотчет Георгию https://vk.com/re_giorgio \nУборка включает в себя протирание пыли, подметание и мытье пола.\nСписки посешающих обновятся в ближайшее воскресение, тогда же будет выслана дата дежурства.\nС понедельника можешь ходить, оставляя на вахте пропуск :)', 8);
INSERT INTO command_responses (id, response, command_id) VALUES (2, 'Милена Леонидовна работает в непраздничные дни с понедельника по четверг с 9:00 до 17:00.\nВ пятницу с 9:00 до 16:30.\nОбеденный перерыв с 13:00 до 13:30.\nТелефон: +78127750530 доб. 1454.\nПочта: dorm5@spbstu.ru', 1);
INSERT INTO command_responses (id, response, command_id) VALUES (3, 'Маргарита Валерьевна (кастелянша) меняет белье в понедельник и в среду с 10:00 до 17:00.\nОбеденный перерыв с 13:00 до 13:30.\nБелье приносить СТРОГО в пакетах.\nВозможны изменения, актуальная информация размещена на первом этаже.', 2);
INSERT INTO command_responses (id, response, command_id) VALUES (4, 'Колобок повесился.', 30);
INSERT INTO command_responses (id, response, command_id) VALUES (5, 'Кощей застрелился.', 30);

INSERT INTO command_synonyms (id, synonym, command_id) VALUES (6, 'КОМЕНДАНТ', 1);
INSERT INTO command_synonyms (id, synonym, command_id) VALUES (7, 'МИЛЕНА', 1);
INSERT INTO command_synonyms (id, synonym, command_id) VALUES (8, 'БЕЛЬЕ', 2);
INSERT INTO command_synonyms (id, synonym, command_id) VALUES (9, 'ПОСТЕЛЬ', 2);
INSERT INTO command_synonyms (id, synonym, command_id) VALUES (10, 'ЗАЛ', 8);
INSERT INTO command_synonyms (id, synonym, command_id) VALUES (11, 'СПОРТЗАЛ', 8);
INSERT INTO command_synonyms (id, synonym, command_id) VALUES (12, 'СПОРТ', 8);
INSERT INTO command_synonyms (id, synonym, command_id) VALUES (13, 'СМЕНА БЕЛЬЯ', 2);
INSERT INTO command_synonyms (id, synonym, command_id) VALUES (14, 'ГЛАВНЫЙ', 1);
INSERT INTO command_synonyms (id, synonym, command_id) VALUES (15, 'АНЕГДОТ', 30);
INSERT INTO command_synonyms (id, synonym, command_id) VALUES (16, 'ШУТКА', 30);


INSERT INTO users (id, full_name, vk_id, room_number, phone_number, type) VALUES (1, 'Гоша', 184541442, 324, '8999', 'студент');
INSERT INTO users (id, full_name, vk_id, room_number, phone_number, type) VALUES (1, 'не Гоша', 6666, 324, '777777777', 'не студент');



