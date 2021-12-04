const Manager = require('../lib/Manager.js');

test('create a manager object', () => {
    const manager = new Manager('Andrew', 123, 'andrew@gmail.com', '123-234-2323');

    expect(manager.name).toBe('Andrew');
    expect(manager.id).toBe(123);
    expect(manager.email).toBe('andrew@gmail.com');
    expect(manager.officeNumber).toBe('123-234-2323');
});

test('create an office number object', () => {
    const manager = new Manager('Andrew', 123, 'andrew@gmail.com', '123-234-2323');

    expect(manager.getOfficeNumber()).toEqual('123-234-2323');
});

test('create a role object', () => {
    const manager = new Manager('Andrew', 123, 'andrew@gmail.com', '123-234-2323');

    expect(manager.getRole()).toEqual('Manager');
});