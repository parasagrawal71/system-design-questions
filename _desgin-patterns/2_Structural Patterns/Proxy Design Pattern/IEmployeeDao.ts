import { Employee } from "./Employee";

export interface IEmployeeDao {
  create(client: string, employeeObj: Employee): void;
  delete(client: string, employeeId: string): void;
  get(client: string, employeeId: string): void;
}
