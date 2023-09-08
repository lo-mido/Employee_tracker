const inquirer = require("inquirer");
const db = require("./config/connection");

db.connect(function (err) {
  if (err) throw err;
  console.log("MySQL Connected");
  mainMenu();
});

const questions = [
  {
    type: "list",
    name: "questions",
    message: "What do you want to do?",
    choices: [
      "View All Employees",
      "View All Departments",
      "View All Roles",
      "Add Employee",
      "Add Department",
      "Add Role",
      "Update Employee Role",
    ],
  },
];

const mainMenu = () => {
  inquirer.prompt(questions).then((res) => {
    if (res.questions === "View All Employees") {
      viewAllEmployees();
    }
    if (res.questions === "View All Departments") {
      viewAllDepartments();
    }
    if (res.questions === "View All Roles") {
      viewAllRoles();
    }
    if (res.questions === "Add Employee") {
      addEmployee();
    }
  });
};

const viewAllDepartments = () => {
  db.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.table(res);
    mainMenu();
  });
};

const viewAllRoles = () => {
  db.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.table(res);
    mainMenu();
  });
};

const viewAllEmployees = () => {
  db.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.table(res);
    mainMenu();
  });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is this employee's first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is this employee's last name?",
      },
      {
        type: "input",
        name: "role",
        message: "What is this employee's role id?",
      },
      {
        type: "input",
        name: "manager",
        message: "What is this employee's manager id?",
      },
    ])
    .then((res) => {
      db.query(`INSERT INTO employee SET ?`, {
        first_name: res.firstName,
        last_name: res.lastName,
        role_id: res.role,
        manager_id: res.manager,
      });
      console.log(`Employee was added`);
      mainMenu();
    });
};
