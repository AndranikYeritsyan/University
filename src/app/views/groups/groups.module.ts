import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {GroupsComponent } from './groups.component'

const routes: Routes = [
  {
    path: '',
    component: GroupsComponent,
    data: {
      title: 'Groups'
    }
  }
];
@NgModule({
  declarations: [GroupsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class GroupsModule { }
