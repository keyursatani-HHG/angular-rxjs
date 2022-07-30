import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //OF
    const Obs1 = of('keyur','viaks','parth','mukunj');

    Obs1.subscribe(res=> {
      console.log(res);
      
    })
  }

}
