import { Employee } from "./Employee";
import { EmployeeDao } from "./EmployeeDao";
import { EmployeeDaoProxy } from "./EmployeeDaoProxy";

(function () {
  try {
    const employeeDao: EmployeeDao = new EmployeeDaoProxy();
    // employeeDao.create("USER", new Employee("Paras"));
    employeeDao.create("ADMIN", new Employee("Paras"));
    console.log(`Operation successful!`);
  } catch (err) {
    console.log(`error: `, err);
  }
})();
