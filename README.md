# Employee Tracker
## Description

This application was developed to empower users in effectively managing employee information by enabling them to create custom tables. These tables comprehensively document employee details, including unique IDs, specified roles, assigned managers, and designated departments. Our application offers the convenience of dynamic and swift table creation, streamlining the process for users.

To utilize this application, users are required to download the software onto their local computer. Once the application is successfully downloaded, users can access its functionality through the command line interface. The application guides users by prompting them with questions regarding their preferences for viewing or adding information to their tables. This intuitive interface allows users to seamlessly interact with the application.

Under the hood, this application leverages the power of MYSQL, inquirer, and console tables, providing users with a robust and efficient toolkit for managing employee data. For a step-by-step demonstration of the application's features, please refer to the linked walkthrough video below.
## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database





## Walkthrough Video 
https://vimeo.com/863752114/6009254a66?share=copy

