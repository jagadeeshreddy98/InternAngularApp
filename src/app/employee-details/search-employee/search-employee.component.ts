import { Component, OnInit, Input } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {

  @Input() empid:string='';

  flag:number=0;

  empdata:any=[];

  emplid:any='';



  constructor(private empservice:EmployeeService,private shared:SharedService){}

  ngOnInit():void
  {
    this.emplid=this.shared.getEmpId();
    this.searchForEmp();  
  }

  searchForEmp()
  {
    this.empservice.viewEmployeeById(this.emplid).subscribe(data =>
      {
        this.flag=1;
        console.log(data);
        this.empdata=data;
        console.log(this.empdata);
      })
  }




}
