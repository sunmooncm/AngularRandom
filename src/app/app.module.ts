import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { RandomchioceComponent } from './components/randomchioce/randomchioce.component';
import { OutputresultComponent } from './components/outputresult/outputresult.component';
import { HomeComponent } from './components/home/home.component';
import zh from '@angular/common/locales/zh';
import { InputdataComponent } from './components/inputdata/inputdata.component';

registerLocaleData(zh);  // 这里修改中文

@NgModule({
  declarations: [
    AppComponent,
    RandomchioceComponent,
    OutputresultComponent,
    HomeComponent,
    InputdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],  // 这里修改中文
  bootstrap: [AppComponent]
})
export class AppModule { }
