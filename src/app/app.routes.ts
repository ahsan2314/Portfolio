import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutAComponent } from './about-a/about-a.component';
import { ServiceAComponent } from './service-a/service-a.component';
import { ProjectAComponent } from './project-a/project-a.component';
import { ContactAComponent } from './contact-a/contact-a.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'about-a', component: AboutAComponent },
    { path: 'service-a', component: ServiceAComponent },
    { path: 'project-a', component: ProjectAComponent },
    { path: 'contact-a', component: ContactAComponent },
];
