import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { HomeComponent } from './home/home.component';
import { Q0Component } from './q0/q0.component';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { Q3Component } from './q3/q3.component';
import { Q4Component } from './q4/q4.component';
import { Q5Component } from './q5/q5.component';
import { Q6Component } from './q6/q6.component';
import { Q7Component } from './q7/q7.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"analysis", component:AnalysisComponent},
  {path:"q0", component:Q0Component},
  {path:"q1", component:Q1Component},
  {path:"q2", component:Q2Component},
  {path:"q3", component:Q3Component},
  {path:"q4", component:Q4Component},
  {path:"q5", component:Q5Component},
  {path:"q6", component:Q6Component},
  {path:"q7", component:Q7Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
