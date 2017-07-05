import { Voucher } from './voucher';

export const VOUCHERS: Voucher[] = [
    { id: 1, user: 'Carlos Rey', state: 'active', creditRemaining: 49, creditTotal: 50, code: 'pe32he75dh92e7', vendor: 'Carlos', url: 'Undefined', bulkNumber: '00001', created: new Date('09/01/2017'), activated: new Date('11/01/2017'), assigned: new Date('10/01/2017'), depleted: null},
    { id: 2, user: 'Ignacio Foche', state: 'active', creditRemaining: 39, creditTotal: 50, code: 'pe32he75dh92e7', vendor: 'Carlos', url: 'Undefined', bulkNumber: '00001', created: new Date('09/01/2017'), activated: new Date('11/01/2017'), assigned: new Date('10/01/2017'), depleted: null},
    { id: 3, user: 'Adrian Quintana', state: 'inactive', creditRemaining: 40, creditTotal: 50, code: 'pe32he75dh92e7', vendor: 'Carlos', url: 'Undefined', bulkNumber: '00001', created: new Date('09/01/2017'), activated: new Date('11/01/2017'), assigned: new Date('10/01/2017'), depleted: null},
    { id: 4, user: 'Arnau Sanchez', state: 'depleted', creditRemaining: 0, creditTotal: 50, code: 'pe32he75dh92e7', vendor: 'Carlos', url: 'Undefined', bulkNumber: '00001', created: new Date('09/01/2017'), activated: new Date('11/01/2017'), assigned: new Date('10/01/2017'), depleted: new Date('10/01/2017')},
    { id: 5, user: 'Jordi Burguet', state: 'inactive', creditRemaining: 10, creditTotal: 50, code: 'pe32he75dh92e7', vendor: 'Carlos', url: 'Undefined', bulkNumber: '00001', created: new Date('09/01/2017'), activated: new Date('11/01/2017'), assigned: new Date('10/01/2017'), depleted: null}
];