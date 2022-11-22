import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { AccountModule } from 'src/account/account.module';
import { AccountRoutingModule } from 'src/account/account-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutRoutingModule } from './../layout/layout-routing.module';
import { PagesModule } from './../app/pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    LayoutRoutingModule,
    AccountModule,
    AccountRoutingModule,
    PagesModule,
    MaterialModule
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
