import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from '../app.component';
import { StationService } from '../station.service';
import { StationListComponent } from '../station-list/station-list.component';
import { StationDetailComponent } from '../station-detail/station-detail.component';
import { GraphSetComponent } from '../graph-set/graph-set.component';
import { KoledarComponent } from '../koledar/koledar.component';
import { DrsnikComponent } from '../drsnik/drsnik.component';
import { GumbiDatumComponent } from '../gumbi-datum/gumbi-datum.component';

const routes: Routes =[
  {path: '', redirectTo:'stations', pathMatch:'full'},
  {path:'stations', component: StationListComponent  },
  {path: '', component: AppComponent},
  {path:'station/:id', component:StationDetailComponent},
  {path:'station/:id1/:id2', component:GraphSetComponent},
  {path:'koledar', component:KoledarComponent},
  {path:'drsnik', component:DrsnikComponent},
  {path:'gumb', component:GumbiDatumComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
