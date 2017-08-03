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
import {ChartModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng'; //koledar za izbiro prikaza
import {SliderModule} from 'primeng/primeng';
import {BreadcrumbModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { StationListComponent } from './station-list/station-list.component';
import { StationDetailComponent } from './station-detail/station-detail.component';
import { GraphSetComponent } from './graph-set/graph-set.component';

//services
import { StationService } from './station.service';
import { ApiService } from './api.service';
import { DataService } from './data.service';
import { PlotGraphComponent } from './plot-graph/plot-graph.component';
import { KoledarComponent } from './koledar/koledar.component';
import { DrsnikComponent } from './drsnik/drsnik.component';
import { GumbiDatumComponent } from './gumbi-datum/gumbi-datum.component';
import { GraphTableComponent } from './graph-table/graph-table.component';


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
    GraphTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    AccordionModule,
    DataTableModule,
    DataGridModule,
    ChartModule,
    CalendarModule,
    SliderModule,
    BreadcrumbModule,
    MenuModule,
    TabViewModule
    
  ],
  providers: [StationService, ApiService, DataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
