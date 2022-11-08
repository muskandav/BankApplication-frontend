import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-openfd',
  templateUrl: './openfd.component.html',
  styleUrls: ['./openfd.component.css']
})
export class OpenfdComponent implements OnInit {

  public showMsg: boolean = false;
  public msg: string = '';

  @Input() accNumber = '';

  fdPeriods: string[] = ['1', '2', '3', '4', '5'];
  fdProducts: string[] = ['Standard', 'Tax Savings', 'Special', 'Corporate', 'Regular', 'Senior Citizen', 'Flexi'];

  formData = new FormGroup({
    fromAcc: new FormControl('', [Validators.required]),
    fdProduct: new FormControl('', [Validators.required]),
    fdPeriod: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
  })

  OnSubmit(): void {
    this.showMsg = true;
    this.msg = 'New FD opened!'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
