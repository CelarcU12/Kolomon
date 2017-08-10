import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from '../app.component';
import { StationListComponent } from '../station-list/station-list.component';
import { StationDetailComponent } from '../station-detail/station-detail.component';
import { GraphSetComponent } from '../graph-set/graph-set.component';
import { KoledarComponent } from '../koledar/koledar.component';
import { DrsnikComponent } from '../drsnik/drsnik.component';
import { GumbiDatumComponent } from '../gumbi-datum/gumbi-datum.component';
import { StationResolver } from '../station.resolver';

const routes: Routes =[
  {path: '', redirectTo:'stations', pathMatch:'full'},
  {path: '', component: AppComponent},
  {path:'stations', component: StationListComponent, resolve: { stations: StationResolver}  },
  {path:'stations/:id', component:StationDetailComponent, resolve: { stations: StationResolver} },
  {path:'stations/:id1/:id2', component:GraphSetComponent, resolve: { stations: StationResolver} },
  {path:'koledar', component:KoledarComponent},
  {path:'drsnik', component:DrsnikComponent},
  {path:'gumb', component:GumbiDatumComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule],
  providers: [StationResolver],
  declarations: []
})
export class RoutingModule { }
