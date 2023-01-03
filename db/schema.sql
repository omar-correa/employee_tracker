DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

 ## Department Name
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL

  );

## name, salary, and department
CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
 
  FOREIGN KEY (department_id) 
    REFERENCES department(id)
);


## first name, last name, role, and manager
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,

  FOREIGN KEY (role_id) 
    REFERENCES role(id)
);