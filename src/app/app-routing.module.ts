import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './includes/header/header.component';
import { ObservableComponent } from './observable/observable.component';
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
    component:ObservableComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
