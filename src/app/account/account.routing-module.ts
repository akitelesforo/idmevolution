import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { Shell } from './../shell/shell.service';
import { AuthGuard } from '../core/authentication/auth.guard';
import { AccountIndexComponent } from './index/index.component';

const routes: Routes = [
Shell.childRoutes([
    { path: 'account/register', pathMatch: 'full', component: RegisterComponent, canActivate: [AuthGuard] },
    { path: 'account', pathMatch: 'full', component: AccountIndexComponent, canActivate: [AuthGuard] },
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AccountRoutingModule { }
