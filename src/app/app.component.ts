import { Component, OnInit} from '@angular/core';
import {SharedService} from './services/shared.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeManagementSystem';


  empid:any='';

  EmpId:any='';

  flag:string='false';


  constructor(private route:Router,private shared:SharedService){}

  ngOnInit():void
  {
    this.empid=this.EmpId;
  }

  SearchEmp()
  {
    this.shared.setEmpId(this.EmpId);
    this.route.navigate(['/searchbyempid']);
  }
}
