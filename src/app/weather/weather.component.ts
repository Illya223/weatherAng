import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  city: string = 'kyiv';
  showForm: boolean = false;
  selectedDayIndex: number | null = null;
  showHourly: boolean = false;
  

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
        
        this.weatherData = this.processForecastData(data);;
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
        this.weatherData = this.processForecastData(data);
        console.log(this.weatherData)
      },
      error => {
        console.error('Error fetching weather data', error);
      }
    );
    this.showForm = false; // Скрыть форму после отправки запроса
  }

  processForecastData(data: any): any[] {
    const days: any[] = [];
    let currentDay: any = null;

    data.list.forEach((entry: any) => {
      const date = new Date(entry.dt * 1000);
      const dayDate = date.toISOString().split('T')[0]; // Получаем дату без времени

      if (!currentDay || currentDay.date !== dayDate) {
        currentDay = {
          date: dayDate,
          avgTemp: 0,
          details: []
        };
        days.push(currentDay);
      }

      currentDay.details.push({
        dt: entry.dt,
        temp: entry.main.temp
      });

      // Пересчитываем среднюю температуру
      currentDay.avgTemp = currentDay.details.reduce((sum, detail) => sum + detail.temp, 0) / currentDay.details.length;
    });

    days.forEach(day => {
      day.avgTemp = parseFloat(day.avgTemp.toFixed(1));
    });

    return days;
  }

  showHourlyForecast(index: number) {
    this.selectedDayIndex = index;
    this.showHourly = true;
  }

  goBack() {
    this.showHourly = false;
  }
}
