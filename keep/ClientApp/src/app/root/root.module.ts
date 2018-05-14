import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '../shared/material.module';
import { Routes, RouterModule } from '@angular/router';

let routes: Routes = [
  { path: "", component: RootComponent }
]

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RootComponent]
})
export class RootModule { }
