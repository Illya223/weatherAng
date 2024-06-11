import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'e2c730b2b5b2a1900fa6c13cb1cc163a';
  private apiUrl = 'https://api.openweathermap.org/data/2.5';
  private geoUrl = 'http://api.openweathermap.org/geo/1.0/direct';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }

  getCoordinates(city: string): Observable<any> {
    const url = `${this.geoUrl}?q=${city}&limit=1&appid=${this.apiKey}`;
    return this.http.get(url).pipe(
      map((response: any) => {
        if (response.length > 0) {
          return {
            lat: response[0].lat,
            lon: response[0].lon
          };
        } else {
          throw new Error('City not found');
        }
      })
    );
  }

  getWeatherbyDate(city: string): Observable<any> {
    return this.getCoordinates(city).pipe(
      switchMap(coords => {
        const url = `${this.apiUrl}/forecast?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${this.apiKey}`;
        return this.http.get<any>(url).pipe(
          map(response => response) // Убедитесь, что вы возвращаете массив list
        );
      })
    );
  }

}
