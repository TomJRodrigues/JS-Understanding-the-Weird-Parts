var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var tom = {
    firstname: 'Tom',
    lastname: 'Rodrigues'
}

// bad idea to change prototype
tom.__proto__ = person;

for (var prop in tom) {
    console.log(prop + ': ' + tom[prop]);
}