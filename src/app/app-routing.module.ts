import { HomeComponent } from './components/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomchioceComponent } from './components/randomchioce/randomchioce.component';
import { OutputresultComponent } from './components/outputresult/outputresult.component';
import { InputdataComponent } from './components/inputdata/inputdata.component';


const routes: Routes = [
  {path: 'randomchioce' , component: RandomchioceComponent},
  {path: 'outputresult' , component: OutputresultComponent} ,
  {path: 'home' , component: HomeComponent},
  {path: 'inputdata' , component: InputdataComponent},
  {path : '' , redirectTo: '/home' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
