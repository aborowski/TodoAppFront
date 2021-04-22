import { Task } from './../models/task';
import { RestTasks } from './../services/rest/rest-tasks.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.sass']
})
export class TaskDetailComponent implements OnInit {

  task: Task;

  constructor(public rest: RestTasks, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getTask(this.route.snapshot.params.id).subscribe(
      (data: Task) => {this.task = {...data}}
    );
  }

}
