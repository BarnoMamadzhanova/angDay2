import { Component, OnInit } from '@angular/core';
import { carsArray} from '../autos.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  newCarsArr: any[] = carsArray

  constructor() {}

  ngOnInit(): void {
    
  }
  

}


