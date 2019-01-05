import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date = new Date(2019, 1, 1);
  mode = 'month';

  constructor() { }

  ngOnInit() {
  }

}
