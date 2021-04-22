import { PriorityEnum } from './../models/priority-enum';
import { RestTasks } from './../services/rest/rest-tasks.service';
import { User } from './../models/user';
import { Task } from './../models/task';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.sass']
})
export class TaskEditComponent implements OnInit {

  priorityEnum = PriorityEnum;

  @Input() taskData: any = 
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

  constructor(public rest: RestTasks, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getTask(this.route.snapshot.params.id).subscribe((data: {}) => {
      console.log(data);
      this.taskData = data;
    })
  }

  updateTask(): void {
    this.rest.updateTask(this.route.snapshot.params.id, this.taskData).subscribe((result) => {
      this.router.navigate(['/tasks/' + result.id]);
    }, (err) => {
      console.log(err);
    });
  }

}
