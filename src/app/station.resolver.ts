import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Station } from './station';
import { DataService } from './data.service';

@Injectable()
export class StationResolver implements Resolve<Observable<Station[]>> {

  constructor(
    private data: DataService
  ) {
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): any {
    console.log('Station Resolver');
    console.log(route.url.length);
    //console.log(route.url)
    if(route.url.length==2){ 
      let id = route.url[1].toString()
      return this.data.getView(id).map(positions => positions.position_set)}
    else if (route.url.length == 3) {
      let id1= route.url[1].toString();
      let id2= route.url[2].toString();
      return this.data.getGraphSets(id1, id2)
    }
    return this.data.getViews();
  }
}