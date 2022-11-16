import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginLazyComponent } from './login-lazy/login-lazy.component';
import { ListLazyComponent } from './list-lazy/list-lazy.component';


@NgModule({
  declarations: [
    LoginLazyComponent,
    ListLazyComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
