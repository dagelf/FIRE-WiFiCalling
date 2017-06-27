import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-calling',
  templateUrl: 'calling.html',
})
export class CallingPage {
    phone_number: string = '';

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public userData: UserData) {
       this.phone_number = this.navParams.get('phone_number');
    }

    gsm() {
        console.log('Tried to call %s using GSM', this.phone_number);
    }

    voip() {
        console.log('Tried to call %s using VoIP', this.phone_number);
    }
}
