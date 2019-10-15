import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditGroupComponent } from './edit-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: EditGroupComponent,
    data: {
      title: 'edit-group'
    }
  }
];
@NgModule({
  declarations: [EditGroupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)

  ],
  exports: [ RouterModule ]
})
export class EditGroupModule { }
