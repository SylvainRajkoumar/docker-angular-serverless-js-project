import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const serverlessUrl = 'http://192.168.99.100:3000/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  cities = [];
  vehiclesPosition = [];
  vehiclesPath = [];
  vehicleSpeed = 0;
  remainingCities = 0;

  getCities = () => {
    this.http.get(serverlessUrl + 'getCities',{observe: 'response'})
      .subscribe(resp => {
        this.cities = [];
        for (let i = 0; i < 10; i++){
          this.cities.push(resp.body[i].position);
        }
      });
  };

  getVehicles = () => {
    this.http.get(serverlessUrl + 'getVehicles',{observe: 'response'})
      .subscribe(resp => {
        this.vehiclesPosition = [];
        this.vehiclesPath = [];
        for (let i = 0; i < 1; i++){
          this.vehiclesPosition.push(resp.body[i].position);
          this.vehiclesPath.push(resp.body[i].path);
          this.vehicleSpeed = resp.body[i].speed;
          this.remainingCities = resp.body[i].path.length;
        }
      });
  };

  drawOnCanvas = () => {
    this.getCities();
    this.getVehicles();
    let canvas =  <HTMLCanvasElement>document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 10; i++){
      ctx.beginPath();
      ctx.arc(this.cities[i][0]*6,this.cities[i][1]*6,15,0,2*Math.PI);
      ctx.font = "15px Roboto";
      ctx.fillStyle = '#89C4F4';
      ctx.fill();
      ctx.strokeStyle = '#89C4F4';
      ctx.stroke();
      ctx.fillStyle = '#1F4788';
      ctx.fillText(i.toString(), this.cities[i][0]*6 - 5, this.cities[i][1]*6 + 5);
    }
    for (let i = 0; i < 1; i++){
      ctx.beginPath();
      ctx.arc(this.vehiclesPosition[i][0]*6,this.vehiclesPosition[i][1]*6,5,
        0,2*Math.PI);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.strokeStyle = 'white';
      ctx.stroke();
    }
  };

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    setInterval(this.drawOnCanvas, 400);
  }
}
