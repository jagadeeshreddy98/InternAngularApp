import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SearchEmployeeComponent } from './employee-details/search-employee/search-employee.component';

const routes: Routes = [{path:'emp',component:EmployeeDetailsComponent},
{path:'searchbyempid',component:SearchEmployeeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
