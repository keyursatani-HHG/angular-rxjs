import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AppserviceService } from 'src/app/appservices/appservice.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements AfterViewInit {

  constructor(private from : AppserviceService ) { }
  @ViewChild('addBtn')
  addBtn!: ElementRef;

  ngOnInit(): void {
    
  }
 ngAfterViewInit(): void {
  let count = 1; 
  fromEvent(this.addBtn.nativeElement ,'click').subscribe(res =>{
    let countVal ='video' + count++
    // console.log(countVal);
    this.from.print(countVal,'elContainer1');
    this.from.print(countVal,'elContainer2');
  })
 }


}
