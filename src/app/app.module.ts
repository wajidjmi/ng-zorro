import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent , NzDemoButtonBasicComponent } from './app.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { MyFirstZorroFormComponent } from './my-first-zorro-form/my-first-zorro-form.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    NzDemoButtonBasicComponent,
    MyFirstZorroFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
