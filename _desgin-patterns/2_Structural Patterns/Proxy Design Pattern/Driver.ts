import { Employee } from "./Employee";
import { IEmployeeDao } from "./IEmployeeDao";
import { EmployeeDaoProxy } from "./EmployeeDaoProxy";

(function () {
  try {
    const employeeDao: IEmployeeDao = new EmployeeDaoProxy();
    // employeeDao.create("USER", new Employee("Paras"));
    employeeDao.create("ADMIN", new Employee("Paras"));
    console.log(`Operation successful!`);
  } catch (err) {
    console.log(`error: `, err);
  }
})();
