import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SearchPipe } from '../pipes/search/search';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PocPage } from '../pages/poc/poc';
import { ShipmentPage } from '../pages/shipment/shipment';
import { OrderforshipmentPage } from '../pages/orderforshipment/orderforshipment';
import { LacoopPage } from '../pages/lacoop/lacoop';
import { VoicePage } from '../pages/voice/voice';
import { PaPage } from '../pages/pa/pa';
import { PadetailsPage } from '../pages/padetails/padetails';
import { GobackPage } from '../pages/goback/goback';
import { OpenOrdersPage } from '../pages/open-orders/open-orders';
import { FarmerDashboardPage } from '../pages/farmer-dashboard/farmer-dashboard';
import { GoodsDetailsPage } from '../pages/goods-details/goods-details';
import { GoodsViewPage } from '../pages/goods-view/goods-view';
import { DashboardOrderPurchase } from '../pages/dashboard-orderpurchase/dashboard-orderpurchase';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PocPage,
    ShipmentPage,
    OrderforshipmentPage,
    LacoopPage,
    VoicePage,
    PaPage,
    PadetailsPage,
    GobackPage,
    SearchPipe,
    OpenOrdersPage,
    FarmerDashboardPage,
    GoodsDetailsPage,
    GoodsViewPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PocPage,
    ShipmentPage,
    OrderforshipmentPage,
    LacoopPage,
    VoicePage,
    PaPage,
    PadetailsPage,
    GobackPage,
    OpenOrdersPage,
    FarmerDashboardPage,
    GoodsDetailsPage,
    GoodsViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
