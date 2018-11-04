import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProgramComponent } from './components/program/program.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SupportComponent } from './components/support/support.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'program', component: ProgramComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'support', component: SupportComponent }, 
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
