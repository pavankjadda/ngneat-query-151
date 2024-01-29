import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { injectQuery } from '@ngneat/query';
import {Employee} from './types/employee';

interface Todo {
  id: number;
  title: string;
}

@Injectable({ providedIn: 'root' })
export class TodosService {
  query = injectQuery();
  httpClient = inject(HttpClient);
  url = 'https://my-json-server.typicode.com/pavankjadda/typicode-data/employees';

  getTodos() {
    return this.query({
      queryKey: ['todos'],
      queryFn: () => {
        return this.httpClient.get<Todo[]>(
          'https://jsonplaceholder.typicode.com/todos'
        );
      },
    });
  }

  getEmployees() {
    return this.query({
      queryKey: ['employees'] as const,
      queryFn: () => this.httpClient.get<Employee[]>(this.url),
      staleTime: 0,
    });
  }
}
