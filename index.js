const inquirer = require('inquirer');
const db = require("./config/connection")

db.connect(function (err) {
    if (err) throw err
    console.log("MySQL Connected")
    mainMenu()
});

const questions = [
    {
        type: "list",
        name: "questions",
        message: "What do you want to do?",
        choices: ["View All Employees", "View All Departments", "View All Roles", "Add Employee", "Add Department", "Add Role", "Update Employee Role"]
    }
]

const mainMenu = () => {
    inquirer.prompt(questions)
    .then((res) => {
        if(res.questions === "View All Employees") {
            viewAllEmployees()
        }
        if(res.questions === "View All Departments") {
            viewAllDepartments()
        }
        if(res.questions === "View All Roles") {
            viewAllRoles()
        }
    })
}

const viewAllDepartments = () => {
    db.query("SELECT * FROM department", function(err, res) {
        if (err) throw err;
        console.table(res)
        mainMenu()
    })
}

const viewAllRoles = () => {
    db.query("SELECT * FROM role", function(err, res) {
        if (err) throw err;
        console.table(res)
        mainMenu()
    })
}

const viewAllEmployees = () => {
    db.query("SELECT * FROM employee", function(err, res) {
        if (err) throw err;
        console.table(res)
        mainMenu()
    })
}