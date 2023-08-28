import { Component ,OnInit} from '@angular/core';
import { WeatherService } from './services/weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  city:string = 'Hyderabad';
  
 
  weatherData: any;
  temperatureFahrenheit: any;
  temperatureCelsius!: number;

  constructor(private weatherService: WeatherService) {}


  
  ngOnInit(): void {
    this.getWeather(this.city)
    this.city=''
      
  }
  onSubmit(){
    this.getWeather(this.city)
    this.city=''

  }
  private getWeather(cityName:string) {
    this.weatherService.getWeather(cityName).subscribe(
      (data) => {
        this.weatherData = data;
        console.log(data)
        this.temperatureCelsius = (this.weatherData.main.temp - 273) ;
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
  
}

