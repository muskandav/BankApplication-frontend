import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-issuecheque',
  templateUrl: './issuecheque.component.html',
  styleUrls: ['./issuecheque.component.css']
})
export class IssuechequeComponent implements OnInit {

  public requestedDate: Date = new Date();
  @Input() accNumber = '';
  public showMsg: boolean = false;
  public msg: string = 'Request Raised!';
  public selected: string = '';
  options: string[] = ['Yes', 'No'];

  constructor() { }

  ngOnInit(): void {
  }

  OnSubmit(): void {
    console.log(this.selected);
  }

}
