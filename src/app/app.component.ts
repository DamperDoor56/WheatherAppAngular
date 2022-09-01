import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private weahterService: WeatherService){

  }
  ngOnInit(): void {
    this.weahterService.getWeatherData('Buenos Aires')
    .subscribe({
      next:(response) => {
        console.log(response)
      }
    });

  }

}
