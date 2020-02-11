import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientIndexComponent } from './index/index.component';
import { Shell } from './../shell/shell.service';
import { AuthGuard } from '../core/authentication/auth.guard';

const routes: Routes = [
Shell.childRoutes([
    { path: 'client', component: ClientIndexComponent, canActivate: [AuthGuard] },
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ClientRoutingModule { }
