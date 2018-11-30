import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BurgerdetailsPage } from '../burgerdetails/burgerdetails';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  toDetails(){
  	this.navCtrl.push(BurgerdetailsPage);
  }

}
