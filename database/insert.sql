INSERT INTO commands (name, is_active, priority) VALUES ('commandant', 1, 1);
INSERT INTO commands (name, is_active, priority) VALUES ('castellan', 1, 1);
INSERT INTO commands (name, is_active, priority) VALUES ('gym', 1, 1);
INSERT INTO commands (name, is_active, priority) VALUES ('study_room', 1, 1);
INSERT INTO commands (name, is_active, priority) VALUES ( 'guests', 1, 1);
INSERT INTO commands (name, is_active, priority) VALUES ( 'shower', 1, 1);
INSERT INTO commands (name, is_active, priority) VALUES ( 'laundry', 1, 1);
INSERT INTO commands (name, is_active, priority) VALUES ( 'duty', 1, 1);
INSERT INTO commands (name, is_active, priority) VALUES ( 'question', 1, 1);
INSERT INTO commands (name, is_active, priority) VALUES ( 'greeting', 1, 3);
INSERT INTO commands (name, is_active, priority) VALUES ( 'parting', 1, 4);
INSERT INTO commands (name, is_active, priority) VALUES ( 'gratitude', 1, 1);
INSERT INTO commands (name, is_active, priority) VALUES ( 'opportunities', 1, 1);
INSERT INTO commands (name, is_active, priority) VALUES ( 'invoice', 1, 1);
INSERT INTO commands (name, is_active, priority) VALUES ( 'topical', 1, 1);
INSERT INTO commands (name, is_active, priority) VALUES ( 'registration', 1, 1);
INSERT INTO commands (name, is_active, priority) VALUES ( 'joke', 1, 2);

select @curr_id:=c.id from commands c where c.name = 'commandant';
INSERT INTO command_synonyms (synonym, command_id) VALUES ('КОМЕНДАНТ', @curr_id);
INSERT INTO command_synonyms (synonym, command_id) VALUES ('МИЛЕНА', @curr_id);
INSERT INTO command_responses (response, command_id) VALUES ('Милена Леонидовна работает в непраздничные дни с понедельника по четверг с 9:00 до 17:00.\nВ пятницу с 9:00 до 16:30.\nОбеденный перерыв с 13:00 до 13:30.\nТелефон: +78127750530 доб. 1454.\nПочта: dorm5@spbstu.ru', @curr_id);

select @curr_id:=c.id from commands c where c.name = 'castellan';
INSERT INTO command_synonyms (synonym, command_id) VALUES ('БЕЛЬЕ', @curr_id);
INSERT INTO command_synonyms (synonym, command_id) VALUES ('ПОСТЕЛЬ', @curr_id);
INSERT INTO command_responses (response, command_id) VALUES ('Маргарита Валерьевна (кастелянша) меняет белье в понедельник и в среду с 10:00 до 17:00.\nОбеденный перерыв с 13:00 до 13:30.\nБелье приносить СТРОГО в пакетах.\nВозможны изменения, актуальная информация размещена на первом этаже.', @curr_id);




select @curr_id:=c.id from commands c where c.name = 'gym';
INSERT INTO command_synonyms (synonym, command_id) VALUES ('СПОРТЗАЛ', @curr_id);
INSERT INTO command_synonyms (synonym, command_id) VALUES ('СПОРТ', @curr_id);
INSERT INTO command_synonyms (synonym, command_id) VALUES ('ЗАЛ', @curr_id);
INSERT INTO command_synonyms (synonym, command_id) VALUES ('СПОРТИВНЫЙ', @curr_id);
INSERT INTO command_synonyms (synonym, command_id) VALUES ('ТРЕНАЖЕРКА', @curr_id);
INSERT INTO command_responses (response, command_id) VALUES ('Тут будет информация о зале
Интерено сохранился ли преренос строки между предложениями?', @curr_id);



select @curr_id:=c.id from commands c where c.name = 'greeting';
INSERT INTO command_synonyms (synonym, command_id) VALUES ('ПРИВЕТ', @curr_id);
INSERT INTO command_synonyms (synonym, command_id) VALUES ('ЗДРАВСТВУЙТЕ', @curr_id);
INSERT INTO command_synonyms (synonym, command_id) VALUES ('ДОБРЫЙ', @curr_id);
INSERT INTO command_responses (response, command_id) VALUES ('И тебе привет!', @curr_id);

select @curr_id:=c.id from commands c where c.name = 'joke';
INSERT INTO command_synonyms (synonym, command_id) VALUES ('ШУТКА', @curr_id);
INSERT INTO command_synonyms (synonym, command_id) VALUES ('ЮМОР', @curr_id);
INSERT INTO command_synonyms (synonym, command_id) VALUES ('АНЕКДОТ', @curr_id);
INSERT INTO command_responses (response, command_id) VALUES ('Колобок повесился.', @curr_id);
INSERT INTO command_responses (response, command_id) VALUES ('Кощей застрелился.', @curr_id);

