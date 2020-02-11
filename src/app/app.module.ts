
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/* Module Imports */
import { ConfigService } from './services/config.service';
import { CoreModule } from './core/core.module';
import { ShellModule } from './shell/shell.module';

import { HomeModule } from './home/home.module';
import { AccountModule } from './account/account.module';
import { ClientModule } from './client/client.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    AccountModule,
    ShellModule,
    RouterModule,
    CommonModule,
    ClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ConfigService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
