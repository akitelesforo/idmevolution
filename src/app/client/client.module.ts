import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client.routing-module';
import { ClientIndexComponent } from './index/index.component';
import { MaterialModule } from './../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClientService } from './client.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientIndexComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [ClientService]
})
export class ClientModule { }
