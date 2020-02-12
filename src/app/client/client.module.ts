import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client.routing-module';
import { ClientIndexComponent } from './index/index.component';
import { MaterialModule } from './../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClientService } from './client.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientFormComponent } from './form/form.component';

@NgModule({
  declarations: [ClientIndexComponent, ClientFormComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ClientService]
})
export class ClientModule { }
