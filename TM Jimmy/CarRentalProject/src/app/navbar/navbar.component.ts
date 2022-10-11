import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title : string = "CAR RENTAL PROJECT"
  donate : number = 0
  constructor() { }

  addDonation(){
    this.donate = this.donate + 10;
  }
  ngOnInit(): void {
  }

}
