import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AccountRoutingModule } from './account.routing-module';
import { AuthService } from '../core/authentication/auth.service';
import { AccountIndexComponent } from './index/index.component';

@NgModule({
  declarations: [RegisterComponent, AccountIndexComponent],
  providers: [AuthService],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule
  ]
})

export class AccountModule { }
