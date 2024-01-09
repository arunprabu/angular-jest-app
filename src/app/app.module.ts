import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuListComponent } from './shared/components/menu-list/menu-list.component';
import { CalcComponent } from './calc/calc.component';
import { ListUsersComponent } from './users/components/list-users/list-users.component';
import { AddUserComponent } from './users/components/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ColorizerDirective } from './about/directives/colorizer.directive';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';
import { HighchartsDemoComponent } from './highcharts-demo/highcharts-demo.component';
import { LineChartComponent } from './highcharts-demo/components/line-chart/line-chart.component';
import { BarChartComponent } from './highcharts-demo/components/bar-chart/bar-chart.component';

// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenuListComponent,
    CalcComponent,
    ListUsersComponent,
    AddUserComponent,
    PageNotFoundComponent,
    ColorizerDirective,
    EllipsisPipe,
    HighchartsDemoComponent,
    LineChartComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
