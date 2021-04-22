import { Task } from './../../models/task';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpointBaseUri: string = 'https://localhost:8080/web-api/tasks';

@Injectable({
  providedIn: 'root'
})
export class RestTasks {

  constructor(private http: HttpClient) { }

  getTask(id: Number): Observable<any> {
    return this.http.get<Task>(endpointBaseUri + "/" + id).pipe(
      catchError(this.handleError)
    );
  }

  getTasks(): Observable<any> {
    return this.http.get<Task>(endpointBaseUri).pipe(
      catchError(this.handleError)
    );
  }

  createTask(task: Task):Observable<any> {
    return this.http.post<Task>(endpointBaseUri, task).pipe(
      catchError(this.handleError)
    );
  }

  replaceTask(id: Number, task: Task): Observable<any> {
    return this.http.put<Task>(endpointBaseUri + "/" + id, task).pipe(
      catchError(this.handleError)
    );
  }

  updateTask(id: Number, task: Task): Observable<any> {
    return this.http.patch<Task>(endpointBaseUri + "/" + id, task).pipe(
      catchError(this.handleError)
    );
  }

  deleteTask(id: Number):Observable<any> {
    return this.http.delete<Task>(endpointBaseUri + "/" + id).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
