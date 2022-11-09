import { Injectable } from '@angular/core';
import { ITransactions, IUserInfo } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CheckbalanceService {

    constructor() { }

    getUserInformation(): IUserInfo {
        return { Name: 'Thor', AccountNumber: 1234567, Balance: 23456 };
    }

    getTransactions(): ITransactions[] {
        return [
            { TransactionId: 1, TransactionDate: new Date('01/01/2000'), Type: 'NEFT', Amount: 10000 },
            { TransactionId: 2, TransactionDate: new Date('01/01/2001'), Type: 'IMPS', Amount: 500 },
            { TransactionId: 3, TransactionDate: new Date('01/01/2001'), Type: 'RTGS', Amount: 2456 },
        ]
    }
}
