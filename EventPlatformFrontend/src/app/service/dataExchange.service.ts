import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataExchangeService {
  public userId: any = '';
  public planner: Planner = null;
  public plannerEvent: PlannerEvent[] = new Array();
  public visitEvent: PlannerEvent = null;
}
