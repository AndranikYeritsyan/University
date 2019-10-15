import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditFacultyComponent } from './edit-faculty.component';
import { FacultesComponent } from '../facultes/facultes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component:  EditFacultyComponent,
    data: {
      title: 'edit faculties'
    }
  }
];
@NgModule({
  declarations: [EditFacultyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class EditFacultyModule { }
