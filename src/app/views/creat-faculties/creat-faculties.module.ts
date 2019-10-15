import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreatFacultiesComponent } from './creat-faculties.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: CreatFacultiesComponent,
    data: {
      title: 'Creat-Faculties'
    }
  }
];
@NgModule({
  declarations: [ CreatFacultiesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class CreatFacultiesModule { }
