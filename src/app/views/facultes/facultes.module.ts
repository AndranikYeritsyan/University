import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FacultesComponent } from './facultes.component';

const routes: Routes = [
  {
    path: '',
    component: FacultesComponent,
    data: {
      title: 'Faculties'
    }
  }
];

@NgModule({
  declarations: [FacultesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class FacultesModule { }
