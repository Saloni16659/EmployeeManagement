import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  providers: [EmployeeService]
})
export class EmployeeComponent {

  update : boolean = false;
  constructor(public es: EmployeeService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);

    if(!this.update){
    this.es.postEmployee(form.value).subscribe((res) => {
      this.resetForm(form);
      console.log('Employee added successfully:', res);
    })
  }else{
    this.es.putEmployee(form.value).subscribe((res) => {
      this.resetForm(form);
      console.log('Employee updated successfully:', res);
      this.update = false;
    })
  }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.es.selectedEmployee = {
      _id: null,
      name: "",
      age: null,
      salary: null,
      designation: ""
    }
    this.refreshEmployees();
  }

  refreshEmployees() {
    this.es.getAllEmployees().subscribe((res) => {
      this.es.employees = res as any[];
    });
  }

  updateEmp(emp: Employee) {
    this.update = true;
    this.es.selectedEmployee = emp;
  }

  deleteEmp(id: string) {
    if (confirm("Are you sure you want to delete this employee?")) {
      this.es.deleteEmployee(id).subscribe((res) => {
        console.log("Employee deleted:", res);
        this.refreshEmployees(); 
      });
    }
  }
}
