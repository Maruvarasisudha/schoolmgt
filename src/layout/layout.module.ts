import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { SidebarComponent } from 'src/layout/sidebar/sidebar.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
SidebarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    SidebarComponent
  ],
})
export class LayoutModule { }
