const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
// const promisemysql = require("promise-mysql");

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '',
    database: 'company_db'
  },
  console.log(`Connected to the departments_db database.`)
);

// Create a movie
//   const sql = `INSERT INTO movies (movie_name)
//     VALUES (?)`;
//   const params = [body.movie_name];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: body
//     });
//   });

// // Read all movies
// app.get((req, res) => {
//   const sql = `SELECT id, movie_name AS title FROM movies`;

//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//        return;
//     }
//     res.json({
//       message: 'success',
//       data: rows
//     });
//   });
// });

// // Delete a movie
// app.delete((req, res) => {
//   const sql = `DELETE FROM movies WHERE id = ?`;
//   const params = [req.params.id];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.statusMessage(400).json({ error: res.message });
//     } else if (!result.affectedRows) {
//       res.json({
//       message: 'Movie not found'
//       });
//     } else {
//       res.json({
//         message: 'deleted',
//         changes: result.affectedRows,
//         id: req.params.id
//       });
//     }
//   });
// });

// // Read list of all reviews and associated movie name using LEFT JOIN
// app.get((req, res) => {
//   const sql = `SELECT movies.movie_name AS movie, reviews.review FROM reviews LEFT JOIN movies ON reviews.movie_id = movies.id ORDER BY movies.movie_name;`;
//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: rows
//     });
//   });
// });

// // BONUS: Update review name
// app.put((req, res) => {
//   const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
//   const params = [req.body.review, req.params.id];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//     } else if (!result.affectedRows) {
//       res.json({
//         message: 'Movie not found'
//       });
//     } else {
//       res.json({
//         message: 'success',
//         data: req.body,
//         changes: result.affectedRows
//       });
//     }
//   });
// });

// // Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const menu = inquirer
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

const viewAllDeps = ;  

const addDep = inquirer.prompt([
  {
    name: "name",
    type:"input",
    message: "What department would you like to add?"
  }
]);

const addRole = inquirer.prompt([
  {
    name: "",
    type: "input",
    message: "What role would you like to add?"
  }
]);

const addEmp = inquirer.prompt([
  {
    name: "first",
    type:"input",
    message: "What is the employee's first name?"
  },
  {
    name: "last",
    type: "input",
    message: "What is the employee's last name?"
  },
  {
    
  }

])
menu()
