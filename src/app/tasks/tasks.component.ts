import { RestTasks } from './../services/rest/rest-tasks.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(public rest: RestTasks, private router: Router) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.rest.getTasks().subscribe((response: any) => {
      this.tasks = response;
      console.log(this.tasks);
    });
  }

  goToAdd(): void{
    this.router.navigate(['/tasks/add']);
  }

  deleteTask(id: Number): void {
    this.rest.deleteTask(id).subscribe(
      () => {
        this.getTasks();
      }, (err) => {
        console.log(err);
      }
    );
  }
}
