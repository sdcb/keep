import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

import { Routes, RouterModule } from '@angular/router';

let routes: Routes = [
  { path: "login", loadChildren: "./login/login.module#LoginModule" },
  { path: "", loadChildren: "./root/root.module#RootModule" }, 
  { path: "**", redirectTo: "login" }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
