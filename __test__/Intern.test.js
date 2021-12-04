const Intern = require('../lib/Intern.js');

test('create an intern object', () => {
    const intern = new Intern('Gabriel', 123, 'gallolopez1@hotmail.com', 'TEC');

    expect(intern.name).toBe('Gabriel');
    expect(intern.id).toBe(123);
    expect(intern.email).toBe('gallolopez1@hotmail.com');
    expect(intern.school).toBe('TEC');
});

test('create a school object', () => {
    const intern = new Intern('Gabriel', 123, 'gallolopez1@hotmail.com', 'TEC');

    expect(intern.getSchool()).toEqual('TEC');
});

test('create a role object', () => {
    const intern = new Intern('Gabriel', 123, 'gallolopez1@hotmail.com', 'TEC');

    expect(intern.getRole()).toEqual('Intern');
});