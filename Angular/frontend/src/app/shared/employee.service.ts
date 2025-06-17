import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: any = {
    _id: "",
    name: "",
    age: null,
    salary: null,
    designation: ""
  };
  employees: Employee[] = [];

  url:string = "http://localhost:4000/employee";

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    return this.http.post(this.url, emp);
  }

  getAllEmployees() {
    return this.http.get(this.url);
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.url +"/"+emp._id, emp);
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.url+"/"+id);
  } 
}
