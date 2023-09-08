INSERT INTO department (id, department_name)
VALUES (1, "Board"),
       (2, "Sales"),
       (3, "Engineering"),
       (4, "Finance"),
       (5, "Legal");

INSERT INTO role (department_id, title, salary)
VALUES (1, "CEO", 1000000),
       (2, "Sales Lead", 100000),
       (2, "Salesperson", 80000),
       (3, "Lead Engineer", 150000),
       (3, "Software Engineer", 120000),
       (4, "Accountant Manager", 160000),
       (4, "Accountant", 125000),
       (5, "Legal Team Lead", 250000),
       (5, "Lawyer", 190000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bryan", "Wall", 1, null),
       ("Janet", "Jackson", 2, 1),
       ("Micheal", "Jordan", 3, 3),
       ("Stephen", "Tyler", 4, 1),
       ("Taylor", "Swift", 5, 4), 
       ("Beyonce", "Knowles", 6, 1),
       ("Angelina", "Jolie", 7, 5),
       ("Leonardo", "Decrapio", 8, 1),
       ("Tom", "Cruise", 9, 6);