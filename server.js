const mysql = require("mysql");
const inquirer = require("inquirer");
// const consoleTable = require("console.table");
// const promisemysql = require("promise-mysql");

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'root',
    database: 'company_db'
  },
  console.log(`Connected to the departments_db database.`)
)

const addDep = () => {
  const addDepPrompt = inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "What department would you like to add?"
    }
  ])
    .then(res => {
      let sql = `INSERT INTO department (department_name) VALUES ("` + res.name + `")`

      db.query(sql, (err, res) => {
        viewAllDeps()
      })
    })
}

const addRole = async () => {

  let sql = "SELECT * FROM department";

  db.query(sql, (err, res) => {
    let departmentNames = res.map(i => i.department_name)

    let arr = res

    const addRolePrompt = inquirer.prompt([
      {
        name: "title",
        type: "input",
        message: "What role you would like to add"
      },
      {
        name: "salary",
        type: "input",
        message: "How much does this role pay?"
      },
      {
        name: "id",
        type: "list",
        message: "Which department does the role belong to?",
        choices: departmentNames
      }
    ])
      .then(res => {
        let found = arr.find(i => i.department_name == res.id)

        let sql = `INSERT INTO role (title, salary, department_id) VALUES ("` + res.title + `", "` + res.salary + `", "` + found.id + `")`
        // console.log(sql)
        db.query(sql, (err, res) => {
          viewAllRoles()
        })
      })

  })
}

const addEmp = () => {

  let roleSql = 'SELECT * FROM role'
  db.query(roleSql, (err, res2) => {
    let roleNames = res2.map(i => i.title)

    let roleArray = res2

    const addEmpPrompt = inquirer.prompt([
      {
        name: "first",
        type: "input",
        message: "What is the employee's first name?"
      },
      {
        name: "last",
        type: "input",
        message: "What is the employee's last name?"
      },
      {
        name: "role",
        type: "list",
        message: "What is the employee's role?",
        choices: roleNames
        
      },
      {
        name: "managerid",
        type: "input",
        message: "What is the employee's manager id?"
      }
    ])
      .then(res => {

        let foundrole = roleArray.find(i => i.title == res.role)


        let sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("` + res.first + `", "` + res.last + `", "` + foundrole.id + `", "` + res.managerid + `")`

        db.query(sql, (err, res) => {
          viewAllEmps()
        })
      })
  })

}

const updateEmpRole = () => {

  let employeeSql = 'SELECT * FROM employee'
  let roleSql = 'SELECT * FROM role'

  db.query(employeeSql, (err, res) => {
    let employeeNames = res.map(i => `${i.first_name} ${i.last_name}`)

    let empArray = res

    db.query(roleSql, (err, res2) => {
      let roleNames = res2.map(i => i.title)

      let roleArray = res2

      const updateEmpRolePrompt = inquirer.prompt([
        {
          name: "employee",
          type: "list",
          message: "What employee you would like to update?",
          choices: employeeNames
        },
        {
          name: "role",
          type: "list",
          message: "What role would you like to assign the employee to?",
          choices: roleNames
        }
      ]).then(res => {
        let foundEmp = empArray.find(i => i.first_name == res.employee.split(' ')[0])
        let foundrole = roleArray.find(i => i.title == res.role)

        let sql = `UPDATE employee SET role_id = "` + foundrole.id + `" WHERE id = "` + foundEmp.id + `"`;

        db.query(sql, (err, res) => {
          mainMenu()
        })
      })


    })




  })
}

const mainMenu = () => {
  inquirer
    .prompt([{
      name: "menu",
      type: "list",
      message: "MAIN MENU",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee Role",
      ]
    }])

    .then((answer) => {

      // Switch case depending on user option
      switch (answer.menu) {
        case "View All Departments":
          viewAllDeps();
          break;

        case "View All Roles":
          viewAllRoles();
          break;

        case "View All Employees":
          viewAllEmps();
          break;

        case "Add Department":
          addDep();
          break;

        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmp();
          break;
        case "Update Employee Role":
          updateEmpRole();
          break;
      }
    });

}


const viewAllDeps = () => {
  let sql = "SELECT * FROM department";

  db.query(sql, (err, res) => {
    let departmentNames = res.map(i => i.department_name)

    console.table(res)
    mainMenu()

    return departmentNames
  })
}

const viewAllRoles = () => {
  let sql = 'SELECT * FROM role';

  db.query(sql, (err, res) => {
    console.table(res)
    mainMenu()
  })
}

const viewAllEmps = () => {
  let sql = 'SELECT * FROM employee'

  db.query(sql, (err, res) => {
    console.table(res)
    mainMenu()
  })
}

mainMenu()
