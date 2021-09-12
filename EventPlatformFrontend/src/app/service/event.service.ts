import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  saveEvent(event) {
    return this.http.post<any>('http://localhost:8087/api/events', event);
  }

  deleteEvent(id) {
    return this.http.delete<any>('http://localhost:8087/api/events',
      { params: { theId: id },
        observe: 'response'}
        );
  }
}
