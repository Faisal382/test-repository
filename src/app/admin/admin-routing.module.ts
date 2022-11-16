import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLazyComponent } from './list-lazy/list-lazy.component';
import { LoginLazyComponent } from './login-lazy/login-lazy.component';

const routes: Routes = [
  {path:'login-lazy',component:LoginLazyComponent},
  {path:'list-lazy',component:ListLazyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
