import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './views/blogs/blogs.component';
import { ContactComponent } from './views/contact/contact.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ExperienceComponent } from './views/skills/experience/experience.component';
import { ProgrammingComponent } from './views/skills/programming/programming.component';
import { SkillsComponent } from './views/skills/skills.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'skills',
    pathMatch: 'full',
    data: { animation: 'isLeft' },
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: { animation: 'isLeft' },
    children: [
      {
        path: '',
        redirectTo: 'programming',
        pathMatch: 'full',
        data: { animation: 'isRight' },
      },
      {
        path: 'programming',
        component: ProgrammingComponent,
        data: { animation: 'isLeft1' },
      },
      {
        path: 'experience',
        component: ExperienceComponent,
        data: { animation: 'isRight1' },
      },
    ],
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'isRight' },
  },
  {
    path: 'blogs',
    component: BlogsComponent,
    data: { animation: 'isLeft1' },
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { animation: 'isRight1' },
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
