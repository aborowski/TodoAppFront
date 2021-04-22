import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TasksComponent } from './tasks/tasks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    data: {
      title: 'Task list'
    }
  },
  {
    path: 'tasks/:id',
    component: TaskDetailComponent,
    data: {
      title: 'Task details'
    }
  },
  {
    path: 'tasks/add',
    component: TaskAddComponent,
    data: {
      title: 'Add Task'
    }
  },
  {
    path: 'tasks/:id/edit',
    component: TaskEditComponent,
    data: {
      title: 'Edit Task'
    }
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
