import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../types/employee';
import { injectQuery } from '@ngneat/query';

@Injectable({
	providedIn: 'root',
})
export class EmployeeService {
	httpClient = inject(HttpClient);
	useQuery = injectQuery();

	url = 'https://my-json-server.typicode.com/pavankjadda/typicode-data/employees';

	getEmployees() {
		return this.useQuery({
			queryKey: ['employees'],
			queryFn: () => this.httpClient.get<Employee[]>('http://localhost:3000/employees'),
		}).result$;
	}

	addEmployee(employee: Employee) {
		return this.useQuery({
			queryKey: ['employees'],
			queryFn: () => this.httpClient.post<Employee>('http://localhost:3000/employees', employee),
		}).result$;
	}

	updateEmployee(employee: Employee) {
		return this.useQuery({
			queryKey: ['employees'],
			queryFn: () => this.httpClient.get<Employee[]>('http://localhost:3000/employees'),
		}).result$;
	}
}
