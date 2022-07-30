import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promoise',
  templateUrl: './promoise.component.html',
  styleUrls: ['./promoise.component.css']
})
export class PromoiseComponent implements OnInit {

  constructor() { }
  promiseval:any;
  hp={
    model:'5252552',
    hardisk:'52TB',
    color:'Nathi khabar'
  }
  dell={
    model:'52525525552',
    hardisk:'5252TB',
    color:'khabar chhe Bhuli gayo'
  }
  NotAvilable={
    model:'Nathi khabar',
    hardisk:'Nathi khabar',
    color:'Nathi khabar'
  }
  HpAvailable(){
    return true;
  }
  DellAvailable(){
    return false;
  }

  ngOnInit(): void {
    //normal funcation
    // let buylaptop = new Promise(function(resolve, reject) {
    //   resolve('buy')
    // })

    //arrow function
    let buylaptop = new Promise((resolve, reject) => {
      // resolve('Buy Laptop Sucessfully [resolve] ')
      // reject('Buy Laptop Unsucessfully [reject]')
      if(this.HpAvailable()){
        setTimeout(() => {
          resolve('Hp is Buy')
          // resolve(this.hp)
        }, 3000);
      }
      else if(this.DellAvailable()){
        setTimeout(() => {
          resolve('Dell is Buy')
          // resolve(this.dell)
        }, 3000);
      }
      else{
        setTimeout(() => {
          resolve('Not a Buy')
          // resolve(this.NotAvilable)
        }, 3000);
      }
    })
    buylaptop.then(res => {
      console.log('Done => ',res);
      this.promiseval = res;
    }).catch(res => {
      console.log('Done => ',res);
      this.promiseval = res;

    })
  }
  

  
}
