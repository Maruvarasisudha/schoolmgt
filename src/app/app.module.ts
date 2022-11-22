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

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';





// const ngWizardConfig: NgWizardConfig = {
//   theme: THEME.default
// };

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
    MatToolbarModule,
    MatBadgeModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    // NgWizardModule.forRoot(ngWizardConfig),
    LayoutRoutingModule,
    MatProgressBarModule,
    AccountRoutingModule,
    PagesModule,
    MatDatepickerModule,
    MatButtonModule



    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
