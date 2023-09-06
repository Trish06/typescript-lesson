var Access;
(function (Access) {
    Access["ADMIN"] = "123";
    Access[Access["MODERATOR"] = 345] = "MODERATOR";
    Access[Access["USER"] = 111] = "USER";
})(Access || (Access = {}));
var student = {
    name: 'Juan',
    age: 19,
    interest: ['Basketball', 'Reading'],
    access: Access.ADMIN
};
if (student.access === '123') {
    console.log('is admin');
}
