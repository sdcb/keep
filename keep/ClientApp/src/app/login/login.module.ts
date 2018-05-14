import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';

let routes: Routes = [
  { path: "", component: LoginComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
