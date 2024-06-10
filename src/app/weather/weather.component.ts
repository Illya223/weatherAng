import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  weatherIcon: any;
  city: string = 'kyiv';
  showForm: boolean = false;
  

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather1();
    }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }
  onCancel(): void {
    this.showForm = false; // Скрыть форму при отмене
  }

  getWeather1(): void {
    this.weatherService.getWeatherbyDate(this.city).subscribe(
      data => {
        
        this.weatherData = data;
        console.log(data)
        console.log(this.weatherData)
      },
      error => {
        console.error('Error fetching weather data', error);
      }
    );
  }

  onWeatherRequest(event: { city: string }): void {
    this.weatherService.getWeatherbyDate(event.city).subscribe(
      data => {
        this.city = event.city;
        this.weatherData = data;
        console.log(this.weatherData)
      },
      error => {
        console.error('Error fetching weather data', error);
      }
    );
    this.showForm = false; // Скрыть форму после отправки запроса
  }


}
