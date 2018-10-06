import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { VolunteerComponent } from './volunteer/volunteer.component'

const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "curriculum", component: CurriculumComponent},
  { path: "gallery", component: GalleryComponent},
  { path: "schedule", component: ScheduleComponent},
  { path: "volunteer", component: VolunteerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
