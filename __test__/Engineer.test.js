const Engineer = require('../lib/Engineer.js');

test('create an engineer object', () => {
    const engineer = new Engineer('Gabriel', 123, 'gallolopez1@hotmail.com', 'gallolopez1');

    expect(engineer.name).toBe('Gabriel');
    expect(engineer.id).toBe(123);
    expect(engineer.email).toBe('gallolopez1@hotmail.com');
    expect(engineer.github).toBe('gallolopez1');
});

test('create a github object', () => {
    const engineer = new Engineer('Gabriel', 123, 'gallolopez1@hotmail.com', 'gallolopez1');

    expect(engineer.getGithub()).toEqual('gallolopez1');
});

test('create a role object', () => {
    const engineer = new Engineer('Gabriel', 123, 'gallolopez1@hotmail.com', 'gallolopez1');

    expect(engineer.getRole()).toEqual('Engineer');
});