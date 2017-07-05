import { Injectable } from '@angular/core';

@Injectable()
export class Voucher {
  id: number;
  user: string;
  state: string;
  creditRemaining: number;
  creditTotal: number;
  code: string;
  url: string;
  bulkNumber: string;
  vendor: string;
  created: Date;
  activated: Date;
  assigned: Date;
  depleted: Date;

  constructor() {
    this.id = 1;
    this.user = 'Undefined';
    this.state = 'inactive';
    this.creditRemaining = -1;
    this.creditTotal = -1;
    this.code = 'Undefined';
    this.url = 'Undefined';
    this.bulkNumber = 'Undefined';
    this.created = new Date();
  }
}
