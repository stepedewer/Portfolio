// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// My Components
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './views/skills/skills.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ContactComponent } from './views/contact/contact.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { BlogsComponent } from './views/blogs/blogs.component';
import { ProgrammingComponent } from './views/skills/programming/programming.component';
import { ExperienceComponent } from './views/skills/experience/experience.component';
import { FooterComponent } from './footer/footer.component';

// Angular Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Material Design
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    PageNotFoundComponent,
    ProgrammingComponent,
    ExperienceComponent,
    FooterComponent,
    BlogsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
