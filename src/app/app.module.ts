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
// import { AccountRoutingModule } from './../account/account-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountModule } from 'src/account/account.module';
import { HttpClientModule } from '@angular/common/http';
// import { NavbarComponent } from './../layout/navbar/navbar.component';
import { FooterComponent } from './../layout/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import { PagesModule } from './pages/pages.module';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    AppComponent,
   
    // NavbarComponent,
    // FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgSelectModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    // AccountRoutingModule,
    HttpClientModule,
    AccountModule,
    MatToolbarModule,
    MatBadgeModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    NgWizardModule.forRoot(ngWizardConfig),
   
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
