import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  constructor(private empservice:EmployeeService){}

  emplst:any=[]

  ngOnInit():void
  {
    this.showAllEmps();
  }

  showAllEmps()
  {
    this.empservice.viewAllEmployess().subscribe(data =>
      {
        console.log(data);
        this.emplst=data;
        console.log(this.emplst);
      })


  }
}
