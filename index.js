const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

// prompt information for manager
const promptManager = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'managerName',
            message: "What is your manager's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is your ID? (Required)',
            validate: managerIDInput => {
                if (managerIDInput) {
                    return true;
                } else {
                    console.log('Please enter your ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your email? (Required)',
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number? (Required)',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                    return false;
                }
            }
        },
    ]);
};

// prompt information for employees
const promptEmployee = employeeData => {
    console.log(`
  =================
  Add a New Employee
  =================`);
    // If there's no 'employee' array property, create one
    if (!employeeData.employees) {
        employeeData.employees = [];
    }
    return inquirer
        .prompt([{
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add an employee?',
                default: true
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is your name? (Required)',
                when: confirm => confirm.confirmAddEmployee,
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeID',
                message: 'What is your ID? (Required)',
                when: confirm => confirm.confirmAddEmployee,
                validate: employeeIDInput => {
                    if (employeeIDInput) {
                        return true;
                    } else {
                        console.log('Please enter your ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email? (Required)',
                when: confirm => confirm.confirmAddEmployee,
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter your email!');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'role',
                message: 'Please select the employee role:',
                when: confirm => confirm.confirmAddEmployee,
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your github account?',
                when: role => role.role === "Engineer",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter your github!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school are you in?',
                when: role => role.role === "Intern",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('Please enter your school!');
                        return false;
                    }
                }
            },
        ])
        .then(data => {
            employeeData.employees.push(data);
            if (data.confirmAddEmployee) {
                return promptEmployee(employeeData);
            } else {
                return employeeData;
            }
        });
};

promptManager()
    .then(promptEmployee)
    .then(answers => {
        let team = [];
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);
        team.push(manager);
        answers.employees.forEach(employee => {
            if (employee.confirmAddEmployee) {
                switch (employee.role) {
                    case 'Engineer':
                        const engineer = new Engineer(employee.name, employee.employeeID, employee.email, employee.github);
                        team.push(engineer);
                        break;
                    case 'Intern':
                        const intern = new Intern(employee.name, employee.employeeID, employee.email, employee.school);
                        team.push(intern);
                        break;
                }
            }
        })
        console.log(team);
        return team;
    })
    .then(team => {
        return generatePage(team);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });