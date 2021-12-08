// function to make parameters dynamic for the different roles 
const generateRole = person => {
    switch (person.getRole()) {
        case 'Manager':
            return `<h4 class="card-text">☕ Manager</h4>`
        case 'Engineer':
            return `<h4 class="card-text">👓 Engineer</h4>`
        case 'Intern':
            return `<h4 class="card-text">🧑‍🎓 Intern</h4>`

    }
}

const generateRoleInfo = person => {
    switch (person.getRole()) {
        case 'Manager':
            return `<li class="list-group-item">Office Number: ${person.getOfficeNumber()}</li>`
        case 'Engineer':
            return `<li class="list-group-item">Github: <a href="https://github.com/${person.getGithub()}" target="_blank">${person.getGithub()}</a></li>`
        case 'Intern':
            return `<li class="list-group-item">School: ${person.getSchool()}</li>`
    }
}

// create card div
const generateEmployeeCard = cardText => {
        return `<div class="row row-cols-1 row-cols-md-3 g-4">
    ${cardText.map(person => {
        return `
        <div class="col">
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${person.getName()}</h5>
                     ${generateRole(person)}
                </div>
                <div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${person.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${person.getEmail()}">${person.getEmail()}</a></li>
                        ${generateRoleInfo(person)}
                    </ul>
                </div>
            </div>
        </div>
    `}).join('')}
</div>`
}

module.exports = template => {
    // destructure page data by section
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐔</text></svg>">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <header>
            <div>
                <h1>My Team</h1>
            </div>
        </header>
        <br>
        <main>
        ${generateEmployeeCard(template)}
        </main>
        <footer>
            <h2>
                &copy; 2021 GGL
            </h2>
        </footer>
    </body>
    
    </html>
`
}