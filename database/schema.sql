create table duties (
  id int primary key auto_increment,
  room_number int not null,
  date timestamp not null
);

create table users (
  id int primary key auto_increment,
  full_name varchar(250) not null,
  vk_id bigint not null,
  room_number int not null,
  phone_number varchar(250) not null,
  type varchar(250) not null
);

create table registrations (
  id int primary key auto_increment,
  user_id int not null,
  room_type varchar(250) not null,
  date timestamp not null,

  constraint registration_ibfk_1
      foreign key (user_id) references users (id)
          on delete cascade
);

create table commands (
  id int primary key auto_increment,
  name varchar(250) not null,
  is_active boolean not null
)

create table command_statistics (
  id int primary key auto_increment,
  vk_id bigint not null,
  date timestamp not null,
  command_id int not null,

  constraint command_statistics_ibfk_1
      foreign key (command_id) references commands (id)
          on delete cascade
);

create table command_synonyms (
  id int primary key auto_increment,
  synonym varchar(250) not null,
  command_id int not null,

  constraint command_synonyms_ibfk_1
      foreign key (command_id) references commands (id)
          on delete cascade
);
