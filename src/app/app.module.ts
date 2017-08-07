import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
//primeNg
import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
import {MenuModule, MenuItem} from 'primeng/primeng';            //api
import {DataTableModule, DataGridModule} from 'primeng/primeng';     //accordion and accordion tab
import {CalendarModule} from 'primeng/primeng'; //koledar za izbiro prikaza
import {SliderModule} from 'primeng/primeng';
import {BreadcrumbModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {ChartModule} from 'primeng/primeng';

//components
import { AppComponent } from './app.component';
import { StationListComponent } from './station-list/station-list.component';
import { StationDetailComponent } from './station-detail/station-detail.component';
import { GraphSetComponent } from './graph-set/graph-set.component';
import { PlotGraphComponent } from './plot-graph/plot-graph.component';
import { KoledarComponent } from './koledar/koledar.component';
import { DrsnikComponent } from './drsnik/drsnik.component';
import { GumbiDatumComponent } from './gumbi-datum/gumbi-datum.component';
import { GraphTableComponent } from './graph-table/graph-table.component';

//services
import { ApiService } from './api.service';
import { DataService } from './data.service';

//chart
//import {GoogleChart} from 'angular2-google-chart/directives/angular2-google-chart.directive';



@NgModule({
  declarations: [
    AppComponent,
    StationListComponent,
    StationDetailComponent,
    GraphSetComponent,
    PlotGraphComponent,
    KoledarComponent,
    DrsnikComponent,
    GumbiDatumComponent,
    GraphTableComponent,
    //GoogleChart
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    AccordionModule,
    DataTableModule,
    DataGridModule,
    CalendarModule,
    SliderModule,
    BreadcrumbModule,
    MenuModule,
    TabViewModule,
    ChartModule
  ],
  providers: [ApiService, DataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AppModule { }
