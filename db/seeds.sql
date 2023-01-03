INSERT INTO department (department_name)
VALUES ("Marketing"),
       ("Sales"),
       ("Accounting"),
       ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Manager", 100000, 1),
       ("Marketing Coordinator", 70000, 1),
       ("Marketing Intern", 35000, 1),
       ("Sales Manager", 150000, 2),
       ("Sales Rep", 90000, 2),
       ("Sales Intern", 40000, 2),
       ("Accounting Manager", 115000, 3),
       ("Accounting Rep", 95000, 3),
       ("Accounting Intern", 55000, 3),
       ("HR Manager", 80000, 4),
       ("HR Rep", 58000, 4),
       ("HR Intern", 38000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Omar", "Correa", 1, NULL),
       ("Fede", "Molina", 2, 1),
       ("Israel", "Salme", 3, 1),
       ("Fransisco", "Franco", 4, NULL),
       ("Gustavo", "Davila", 5, 4),
       ("Mateo", "Ocampo", 6, 4),
       ("Reinaldo", "Villasmil", 7, NULL),
       ("Sebastian", "Cubillos", 8, 7),
       ("David", "Gamero", 9, 7),
       ("Nick", "Pepino", 10, NULL),
       ("Giancarlo", "Fraguio", 11, 10),
       ("Jarred", "Martin", 12, 10);
