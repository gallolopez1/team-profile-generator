const Employee = require('../lib/Employee.js');

test('create an employee object', () => {
    const employee = new Employee('Gabriel', 123, 'gallolopez1@hotmail.com');

    expect(employee.name).toBe('Gabriel');
    expect(employee.id).toBe(123);
    expect(employee.email).toBe('gallolopez1@hotmail.com');
});

test('create Employee name object', () => {
    const employee = new Employee('Gabriel', 123, 'gallolopez1@hotmail.com');

    expect(employee.getName()).toEqual('Gabriel');
});

test('create Employee id object', () => {
    const employee = new Employee('Gabriel', 123, 'gallolopez1@hotmail.com');

    expect(employee.getId()).toEqual(123);
});

test('create Employee email object', () => {
    const employee = new Employee('Gabriel', 123, 'gallolopez1@hotmail.com');

    expect(employee.getEmail()).toEqual('gallolopez1@hotmail.com');
});