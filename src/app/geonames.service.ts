import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeonamesService {
  //private username = 'illya'; // Замените на ваш username Geonames
  //private apiUrl = `/geonames/searchJSON?username=${this.username}&maxRows=1000&cities=cities15000`;
  private proxyUrl = 'http://localhost:3000/geonames';

  constructor(private http: HttpClient) { }

  getCities(): Observable<any> {
    return this.http.get<any>(this.proxyUrl);
    
    }
}
