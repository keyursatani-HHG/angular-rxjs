import { Component, OnInit } from '@angular/core';
import { interval, Subscriber, Subscription, timer } from 'rxjs';
import { AppserviceService } from 'src/app/appservices/appservice.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  obsMsg: any;
  videoSubscription: any = new Subscription;
  constructor(private interval:AppserviceService) { }

  ngOnInit(): void {
    // const broadCastVideos = interval(1000);
    //timer(deley,interval)
    const broadCastVideos = timer(3000,1000)
    this.videoSubscription = broadCastVideos.subscribe(res =>{
      console.log(res);
      this.obsMsg = 'video' + res;
      this.interval.print(this.obsMsg ,'elContainer1')
      this.interval.print(this.obsMsg ,'elContainer2')
      this.interval.print(this.obsMsg ,'elContainer3')

      if(res >=  5){
        this.videoSubscription.unsubscribe();
      }
    })
  }

}
