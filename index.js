// A program to keep track of a company's employees and their data
const employee = {
    name: "Jay",
    streetAddress: "34 Nairobi",
};
//New object with updated value for the key passed in
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee}
  
    newEmployee[key] = value;
  
    return newEmployee;
}
  //Destructively Update Employee with Key and Value

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]= value;

    return employee;
}
//Non-destructvely delete from the employee object
function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = { ...employee };
  
    delete newEmployee[key];
  
    return newEmployee;
  }
  //Destructvely delete from the employee object
  function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key];
  
    return employee;
  }