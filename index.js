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
    if (res.questions === "Add Department") {
      addDepartment();
    }
    if (res.questions === "Add Role") {
      addRole();
    }
    if (res.questions === "Update Employee Role") {
        updateEmployeeRole()
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

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "deptName",
        message: "What is this department name?",
      },
    ])
    .then((res) => {
      db.query(`INSERT INTO department SET ?`, {
        department_name: res.deptName,
      });
      console.log(`Department added`);
      mainMenu();
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "roleName",
        message: "What is the name of the role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary of the role?",
      },
      {
        type: "input",
        name: "roleDept",
        message: "Which department does the role belong to?",
      },
    ])
    .then((res) => {
      db.query(`INSERT INTO role SET ?`, {
        title: res.roleName,
        salary: res.salary,
        department_id: res.roleDept,
      });
      console.log(`Role added`);
      mainMenu();
    });
};

const updateEmployeeRole = () => {
  db.query(`SELECT * FROM employee`, (err, data) => {
    if (err) throw err;
    const employees = data.map(({ id, first_name, last_name }) => ({
      name: first_name + " " + last_name,
      value: id,
    }));

    inquirer
      .prompt([
        {
          type: "list",
          name: "name",
          message: "Which employee would you like to update?",
          choices: employees,
        },
      ])
      .then((res) => {
        const employee = res.name;
        const params = [];
        params.push(employee);
        db.query(roleSql, (err, data) => {
          if (err) throw err;

          const roles = data.map(({ id, title }) => ({
            name: title,
            value: id,
          }));
          inquirer
            .prompt([
              {
                type: "list",
                name: "role",
                message: "What is the employee's new role?",
                choices: roles,
              },
            ])
            .then((res) => {
              const role = res.role;
              params.push(role);
              let employee = params[0];
              params[0] = role;
              params[1] = employee;
              db.query(`UPDATE employee SET role_id = ? WHERE id = ?`, params, (err, result) => {
                if (err) throw err;
                console.log("Employee has been updated!");
                mainMenu();
              });
            });
        });
      });
  });
};
