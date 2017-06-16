import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../providers/user-data';

import { VoucherListPage } from './voucherList/voucherList';
import { AddVoucherPage } from './addVoucher/addVoucher';

@IonicPage()
@Component({
  selector: 'page-topup',
  templateUrl: 'topup.html',
})
export class TopupPage {
  addVoucher = AddVoucherPage;
  voucherList = VoucherListPage;



  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public userData: UserData,
      ) {
  }
}
