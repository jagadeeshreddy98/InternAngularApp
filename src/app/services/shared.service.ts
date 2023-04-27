import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  empid:string='';

  constructor() { }

  setEmpId(id:string)
  {
    this.empid=id;
  }

  getEmpId()
  {
    return this.empid;
  }
}
