import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CalcComponent } from './calc/calc.component';
import { ListUsersComponent } from './users/components/list-users/list-users.component';
import { AddUserComponent } from './users/components/add-user/add-user.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HighchartsDemoComponent } from './highcharts-demo/highcharts-demo.component';

// Routing Config
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calc', component: CalcComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'users/add', component: AddUserComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'highcharts-demo', component: HighchartsDemoComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
