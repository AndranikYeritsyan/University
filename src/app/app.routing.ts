import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'faculties',
        loadChildren: () => import('./views/facultes/facultes.module').then(m => m.FacultesModule)
      },
      {
        path: 'groups',
        loadChildren: () => import('./views/groups/groups.module').then(m => m.GroupsModule)
      },
      {
        path: 'students',
        loadChildren: () => import('./views/students/students.module').then(m => m.StudentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'creat-faculties',
        loadChildren: () => import('./views/creat-faculties/creat-faculties.module').then(m => m.CreatFacultiesModule)
      },
      {
        path: 'edit-faculties/:id',
        loadChildren: () => import('./views/edit-faculty/edit-faculty.module').then(m => m.EditFacultyModule)
      },
      {
        path: 'creat-groups',
        loadChildren: () => import('./views/creat-groups/creat-groups.module').then(m => m.CreatGroupsModule)
      },
      {
        path: 'edit-group/:id',
        loadChildren: () => import('./views/edit-group/edit-group.module').then(m => m.EditGroupModule)
      },
      {
        path: 'creat-student',
        loadChildren: () => import('./views/creat-student/creat-student.module').then(m => m.CreatStudentModule)
      },
      {
        path: 'edit-student/:id',
        loadChildren: () => import('./views/edit-student/edit-student.module').then(m => m.EditStudentModule)
      },
     
      
    ]
  },
  // { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
