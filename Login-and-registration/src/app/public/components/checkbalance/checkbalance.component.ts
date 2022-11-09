import { Component, Input, OnInit } from '@angular/core';
import { ITransactions, IUserInfo } from '../../interfaces';
import { CheckbalanceService } from '../../services/checkbalance.service';

export interface PeriodicElement {
  TransactionId: number;
  TransactionDate: string;
  Type: number;
  Amount: string;
}


@Component({
  selector: 'app-checkbalance',
  templateUrl: './checkbalance.component.html',
  styleUrls: ['./checkbalance.component.css'],
  providers: [CheckbalanceService]
})
export class CheckbalanceComponent implements OnInit {

  @Input() accNumber = '';

  displayedColumns: string[] = ['TransactionId', 'TransactionDate', 'Type', 'Amount'];

    dataSource: ITransactions[] = [];
    userInfo: IUserInfo = {
        Name: '',
        AccountNumber: 0,
        Balance: 0
    };

  constructor(private transactionService: CheckbalanceService) { }

    ngOnInit(): void {
        this.dataSource = this.transactionService.getTransactions();
        this.userInfo = this.transactionService.getUserInformation();
  }

}
