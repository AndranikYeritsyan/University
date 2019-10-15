import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreatStudentComponent } from './creat-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CreatStudentComponent,
    data: {
      title: 'create-student'
    }
  }
];
@NgModule({
  declarations: [ CreatStudentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class CreatStudentModule { }
