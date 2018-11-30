import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BurgerdetailsPage } from './burgerdetails';

@NgModule({
  declarations: [
    BurgerdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BurgerdetailsPage),
  ],
})
export class BurgerdetailsPageModule {}
