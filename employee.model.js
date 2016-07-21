var employees = [
    {
        id: 1,
        name: 'Moe'
    },
    {
        id: 2,
        name: 'Larry'
    },
    {
        id: 3,
        name: 'Curly'
    }
];

module.exports = {
   getEmployees: function(){
       return employees;
   },
   getEmployee: function(id){
      return this.getEmployees() 
        .filter(function(employee){
           return employee.id === id; 
        })[0];
   }
}