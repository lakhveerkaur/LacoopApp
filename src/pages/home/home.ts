import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
// import { PocPage } from '../poc/poc';
//import { ShipmentPage } from '../shipment/shipment';
//import { LacoopPage } from '../lacoop/lacoop';
//import { OpenOrdersPage } from '../open-orders/open-orders';
import { FarmerDashboardPage } from '../farmer-dashboard/farmer-dashboard';
import { PaPage } from '../pa/pa';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  kohlsPoc(event){
  console.log("click method called");
  // this.modalCtrl.create(PocPage).present();
 this.navCtrl.push(FarmerDashboardPage);
//  this.navCtrl.push(LacoopPage);
}
shipMent(event){
  console.log("shipment");
  this.navCtrl.push(PaPage);
}
}
