import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './includes/header/header.component';
import { AllComponent } from './observable/all/all.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PromoiseComponent } from './promoise/promoise.component';

const routes: Routes = [
 
  {
    path:'',
    component:HeaderComponent
  },
  
  {
    path:'promise',
    component:PromoiseComponent
  },
  {
    path:'observable',
    component:ObservableComponent,
    children:[
      {path:'',component:AllComponent},
      {path:'fromevent',component:FromEventComponent},
      {path:'interval',component:IntervalComponent},
      {path:'ofFrom',component:OfFromComponent},
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
