import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreatGroupsComponent } from './creat-groups.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: CreatGroupsComponent,
    data: {
      title: 'creat-groups'
    }
  }
];
@NgModule({
  declarations: [CreatGroupsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class CreatGroupsModule { }
