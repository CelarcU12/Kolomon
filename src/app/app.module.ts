import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
//primeNg
import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
import {MenuItem} from 'primeng/primeng';            //api
import {DataTableModule, DataGridModule} from 'primeng/primeng';     //accordion and accordion tab

import { AppComponent } from './app.component';
import { StationListComponent } from './station-list/station-list.component';
import { StationDetailComponent } from './station-detail/station-detail.component';

//services
import { StationService } from './station.service';
import { ApiService } from './api.service';
import { PositionService } from './station-detail/position.service';

@NgModule({
  declarations: [
    AppComponent,
    StationListComponent,
    StationDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    AccordionModule,
    DataTableModule,
    DataGridModule
  ],
  providers: [StationService, ApiService, PositionService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
