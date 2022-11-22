import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { StudentInfoModule } from './pages/student-info/student-info.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';


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
    MatIconModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    // NgWizardModule.forRoot(ngWizardConfig),
    LayoutRoutingModule,
    MatProgressBarModule,
    AccountRoutingModule,
    AccountModule,
    PagesModule,
    StudentInfoModule
    
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
