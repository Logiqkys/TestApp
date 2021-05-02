import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeLayoutComponent } from './components/layout/home-layout/home-layout.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material-module';
import { DataTablesModule } from 'angular-datatables';
import { HttpModule } from '@angular/http';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxSpinnerModule } from "ngx-spinner";
import { AboutUsComponent } from './components/about-us/about-us.component';

import { GoComponent } from './components/go/go.component';
import { BankComponent } from './components/bank/bank.component';


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { NgxFileDropModule } from 'ngx-file-drop';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeLayoutComponent,
    AboutUsComponent,
    GoComponent,
    BankComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    NgbModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpModule,
    NgxPageScrollModule,
    NgxSpinnerModule,
    NgxFileDropModule,
    PerfectScrollbarModule
  ],

  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
