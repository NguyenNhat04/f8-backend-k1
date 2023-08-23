CREATE TABLE courses(
    id int NOT NULL,
    name varchar(30) NOT NULL,
    price float,
    detail text,
    teacher_id int NOT NULL,
    active int,
    created_at timestamp,
    updated_at timestamp
)


ALTER TABLE courses ADD description text NOT NULL AFTER price;

ALTER TABLE courses CHANGE COLUMN detail contain text NOT NULL



CREATE TABLE teacher (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    bio TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

INSERT INTO teacher (id, name, bio, created_at, updated_at)
VALUES
    (1, "teacher1", "bio-1", NOW(), NOW()),
    (2, "teacher1", "bio-2", NOW(), NOW()),
    (3, "teacher1", "bio-3", NOW(), NOW());

ALTER TABLE teacher MODIFY COLUMN name NVARCHAR(50);


INSERT INTO courses(id, name, price, description, contain, teacher_id, active, created_at, updated_at) 
VALUES
    (1,"course-1",50000,"description-1","contain-1",1,0,NOW(),NOW()),
    (2,"course-1",60000,"description-2","contain-2",1,0,NOW(),NOW()),
    (3,"course-1",70000,"description-3","contain-3",1,0,NOW(),NOW()),
    (4,"course-1",80000,"description-4","contain-4",2,1,NOW(),NOW()),
    (5,"course-1",90000,"description-5","contain-5",2,1,NOW(),NOW()),
    (6,"course-1",40000,"description-6","contain-6",2,1,NOW(),NOW()),
    (7,"course-1",30000,"description-7","contain-7",3,1,NOW(),NOW()),
    (8,"course-1",20000,"description-8","contain-8",3,1,NOW(),NOW()),
    (9,"course-1",10000,"description-9","contain-9",3,1,NOW(),NOW());


UPDATE courses SET name = 'course-new-1', price = 600000, updated_at = NOW() WHERE id = 1;
UPDATE courses SET name = 'course-new-2', price = 700000, updated_at = NOW() WHERE id = 2;
UPDATE courses SET name = 'course-new-3', price = 800000, updated_at = NOW() WHERE id = 3;
UPDATE courses SET name = 'course-new-4', price = 800000, updated_at = NOW() WHERE id = 4;
UPDATE courses SET name = 'course-new-5', price = 900000, updated_at = NOW() WHERE id = 5;
UPDATE courses SET name = 'course-new-6', price = 1000000, updated_at = NOW() WHERE id = 6;
UPDATE courses SET name = 'course-new-7', price = 1000000, updated_at = NOW() WHERE id = 7;
UPDATE courses SET name = 'course-new-8', price = 1000000, updated_at = NOW() WHERE id = 8;
UPDATE courses SET name = 'course-new-9', price = 1000000, updated_at = NOW() WHERE id = 9;




use database_01_tenhocvien;
SELECT * FROM teacher;
SELECT * FROM courses;




