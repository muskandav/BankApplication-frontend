import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css']
})
export class FundtransferComponent implements OnInit {

  @Input() accNumber = '';
  public showMsg: boolean = false;
  public msg: string = 'Transfer Successful';

  accTypes: string[] = ['Salary', 'Savings', 'Current'];

  formData = new FormGroup({
    fromAccount: new FormControl('accNumber', [Validators.required]),
    beneficiaryAcc: new FormControl('', [Validators.required]),
    beneficiaryAccType: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
  });

  OnSubmit(): void {
    console.log(this.formData.value);
    this.showMsg = true;
  }

  get f() {
    return this.formData.controls;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
