create database lovely_bros;
use lovely_bros;

create table people
(
	id INT primary key auto_increment, 
    FirstName varchar(20) NOT null,
    LastName varchar(20) NOT null, 
    SecretName varchar(20) NOT null,
    age tinyint NOT null, 
    address varchar(250) NOT null
);

insert into people(id, FirstName, LastName,SecretName, age, address)
value
(0001, "Александра", "Созонова", "Сашуля", 30 , "198516, г. Санкт-Петербург, пр-т Ветеранов, дом 187, квартира 904"),
(0002, "Иван", "Черняев","Мрм", 33 , "198504, г. Петергоф, ул. Солнечная, дом 114, частный"),
(0003, "Валентина", "Меркулова","Валенок", 35 , "394086, г. Москва, ул. Пинский пер, дом 119, квартира 19"),
(0004, "Роман", "Сафаров","Сафар", 31 , "607621, г. Москва, ул. Ласточкина, дом 172, квартира 270"),
(0005, "Владислав", "Нечаев","ЦСК", 20 , "617105, г. Москва, ул. 60-летия Октября пр-кт, дом 146, квартира 948"),
(0006, "Лука", "Сергеев","Лук", 26 , "632415, г. Средняя Ахтуба, ул. Выползов пер, дом 73, квартира 320"),
(0007, "Марина", "Великова", "МатьГода", 27 , "Тучковская ул., Москва, 121087"),
(0008, "Наталия", "Дмитриева","Пробабка", 75 , "Беговая ул., Москва, 125284"),
(0009, "Егор", "Князев", 29 , "ул. Верземнека, 6, Москва, 129272");

select FirstName from people
where address regexp 'Москва' and age >= 18 and age < 30;