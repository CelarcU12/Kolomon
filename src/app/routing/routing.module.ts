import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from '../app.component';
import { StationService } from '../station.service';
import { StationListComponent } from '../station-list/station-list.component';
import { StationDetailComponent } from '../station-detail/station-detail.component';

const routes: Routes =[
  {path: '', redirectTo:'stations', pathMatch:'full'},
  {path:'stations', component: StationListComponent  },
  {path: '', component: AppComponent},
  {path:'station/:id', component:StationDetailComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
