import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string='http://localhost:4185/';
  constructor(private http:HttpClient) { }

  viewAllEmployess()
  {
    return this.http.get(this.url+'EmployeeDetail');
  }

  viewEmployeeById(id:any)
  {
    return this.http.get(this.url+'DisplayByEmpId/'+id);
  }


}
