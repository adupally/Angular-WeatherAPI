import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // private apiKey = environment.apiKey;
  private apiUrl = 'https://api.openweathermap.org/data/2.5';
  

  constructor(private http: HttpClient) {
  }

  getWeather(city: string): Observable<any> {
    const apiKey = environment.apiKey;
    const url = `${this.apiUrl}/weather?q=${city}&appid=${apiKey}`;
    return this.http.get(url);
  }
}
