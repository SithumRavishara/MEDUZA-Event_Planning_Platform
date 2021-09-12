import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export  class PlannerService {

  constructor(private http: HttpClient) { }


  savePlanner(planner) {
    return this.http.post<any>('http://localhost:8087/apis/planner', planner);
  }


}
