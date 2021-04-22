import { Task } from './../models/task';
import { PriorityEnum } from './../models/priority-enum';
import { User } from './../models/user';
import { RestTasks } from './../services/rest/rest-tasks.service';
import { SoftDeletable } from './../models/soft-deletable';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.sass']
})
export class TaskAddComponent implements OnInit {

  priorityEnum = PriorityEnum;

  @Input() taskData: Task = 
  {
    id: 0,
    title: '',
    description: '',
    priority: 0,
    user: null,
    watchers: [] as User[],
    deleted: {
      deleted: false,
      deletedAt: null
    }
  }

  constructor(public rest:RestTasks, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
  }

  addTask(): void {
    this.rest.createTask(this.taskData).subscribe((result) => {
      this.router.navigate(['/tasks/' + result.id]);
    }, (err) => {
      console.log(err);
    });
  }

}
