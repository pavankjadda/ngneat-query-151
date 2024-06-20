import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './home/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './home/delete-employee/delete-employee.component';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'add_employee',
		component: AddEmployeeComponent,
	},
	{
		path: 'delete_employee',
		component: DeleteEmployeeComponent,
	},
];
