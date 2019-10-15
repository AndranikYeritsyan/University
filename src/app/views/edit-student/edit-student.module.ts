import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditStudentComponent } from './edit-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: EditStudentComponent,
    data: {
      title: 'edit-group'
    }
  }
];
@NgModule({
  declarations: [ EditStudentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ RouterModule ]
})
export class EditStudentModule { }
