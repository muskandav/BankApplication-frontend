import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  @Output() selectedIndex = true;
  @Input() userAccountNumber = '';


  constructor(
    
  ) {
    
  }

  

  ngOnInit(): void {

  }

}
