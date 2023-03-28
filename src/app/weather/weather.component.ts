import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  currentWeather: any;
  temperature: number = 0;
  summary: string = '';
  feelsLike: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  visibility: number = 0;
  wind: number = 0;
  city: string = '';
  newCity: string = '';
  constructor(private weatherservice: WeatherService) {}

  ngOnInit(): void {
    console.log(this.city);
    this.getWeatherData(this.city);
  }

  getWeatherData(city: string) {
    this.weatherservice.getWeather(city).subscribe({
      next: (res) => {
        console.log(res);
        this.currentWeather = res;
        this.temperature = this.currentWeather.main.temp;
        this.summary = this.currentWeather.weather[0].main;
        this.feelsLike = this.currentWeather.main.feels_like;
        this.humidity = this.currentWeather.main.humidity;
        this.pressure = this.currentWeather.main.pressure;
        this.visibility = this.currentWeather.visibility;
        this.wind = this.currentWeather.wind.speed;
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed successfully'),
    });
  }

  onSearch() {
    console.log(this.city);
    this.getWeatherData(this.city);
    this.newCity = this.city;
  }
}
