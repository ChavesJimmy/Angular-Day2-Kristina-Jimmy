import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrayCars : Array<{Model : string, Brand:string, MaxSpeed:number,Kilometer:number, Available:boolean, pic:string }> = [
    {Model : "Boxter",
    Brand : "Porsche",
    MaxSpeed : 250,
    Kilometer : 53000,
    Available : true,
    pic :"https://cdn.pixabay.com/photo/2019/03/03/16/52/porsche-boxter-4032307__480.jpg"
  },

    {Model : "306",
    Brand : "Peugeot",
    MaxSpeed : 180,
    Kilometer : 73000,
    Available : true,
    pic :"https://cdn.pixabay.com/photo/2014/10/23/12/46/peugeot-499684__480.jpg"
  },

    {Model : "Cooper",
    Brand : "Mini",
    MaxSpeed : 170,
    Kilometer : 13000,
    Available : false,
    pic :"https://cdn.pixabay.com/photo/2013/02/21/19/08/red-84593__480.jpg"
  },

    {Model : "Mustang",
    Brand : "Ford",
    MaxSpeed : 280,
    Kilometer : 53000,
    Available : true,
    pic :"https://cdn.pixabay.com/photo/2013/06/15/18/15/car-139529__480.jpg"
  },
  ];

  car = new FormGroup({
    Model: new FormControl('',Validators.required), 
    Brand: new FormControl('',Validators.required), 
    MaxSpeed: new FormControl('',Validators.required), 
    Kilometer:new FormControl('',Validators.required),
    Available : new FormControl ('',Validators.required),
    pic : new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){

    if(this.car.valid){
      var a:any = this.car.value;
      console.log(a);
      this.arrayCars.push(a);
   }
}
}