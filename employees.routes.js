var router = require('express').Router();
var Employee = require('./employee.model');
module.exports = router;

router.get('/', function(req, res, next){
    res.render('employees', {employees: Employee.getEmployees(), title: 'Employees'});
});

router.get('/administrators', function(req, res, next){
    res.render('employees', {employees: Employee.getEmployees(), title: 'Employees'});
});

router.get('/:id', function(req, res, next){
    res.render('employee', {
        employee: Employee.getEmployee(req.params.id*1),
        title: 'Employee'});
});

