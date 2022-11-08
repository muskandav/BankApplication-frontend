import { Component, Input, OnInit } from '@angular/core';

export interface PeriodicElement {
  TransactionId: number;
  TransactionDate: string;
  Type: number;
  Amount: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { TransactionId: 1, TransactionDate: 'Hydrogen', Type: 1.0079, Amount: 'H' },
  { TransactionId: 2, TransactionDate: 'Helium', Type: 4.0026, Amount: 'He' },
  { TransactionId: 3, TransactionDate: 'Lithium', Type: 6.941, Amount: 'Li' },

]

@Component({
  selector: 'app-checkbalance',
  templateUrl: './checkbalance.component.html',
  styleUrls: ['./checkbalance.component.css']
})
export class CheckbalanceComponent implements OnInit {

  @Input() accNumber = '';


  ;

  displayedColumns: string[] = ['TransactionId', 'TransactionDate', 'Type', 'Amount'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
