import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook} from '@fortawesome/free-brands-svg-icons';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProgramComponent } from './components/program/program.component';
import { SupportComponent } from './components/support/support.component';

library.add(faFacebook);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ScheduleComponent,
    CurriculumComponent,
    VolunteerComponent,
    RegistrationComponent,
    AboutComponent,
    ContactComponent,
    SponsorsComponent,
    FooterComponent,
    ProgramComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
