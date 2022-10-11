import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrayCars : Array<{Model : string, Brand:string, MaxSpeed:number,Kilometer:number, Available:boolean }> = [
    {Model : "Boxter",
    Brand : "Porsche",
    MaxSpeed : 250,
    Kilometer : 53000,
    Available : true},

    {Model : "306",
    Brand : "Peugeot",
    MaxSpeed : 180,
    Kilometer : 73000,
    Available : true},

    {Model : "Cooper",
    Brand : "Mini",
    MaxSpeed : 170,
    Kilometer : 13000,
    Available : false},

    {Model : "Mustang",
    Brand : "Ford",
    MaxSpeed : 280,
    Kilometer : 53000,
    Available : true},
   
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
