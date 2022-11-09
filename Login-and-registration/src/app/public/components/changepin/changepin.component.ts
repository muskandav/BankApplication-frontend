import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GetpinService } from '../../services/getpin.service';

@Component({
  selector: 'app-changepin',
  templateUrl: './changepin.component.html',
    styleUrls: ['./changepin.component.css'],
    providers: [GetpinService]
})
export class ChangepinComponent implements OnInit {

  public showMsg: boolean = false;
    public msg: string = '';
    public oldUserPin: number = 0;
    
  formData = new FormGroup({
    oldPin: new FormControl('', [Validators.required]),
    newPin: new FormControl('', [Validators.required]),
    ConfirmNewPin: new FormControl('', [Validators.required]),
  });

    constructor(private getpinService: GetpinService) { }

    ngOnInit() {
        this.oldUserPin = this.getpinService.getOldPin();
    }

  OnSubmit(): void {
    const newP = this.formData.get('newPin')?.value;
      const Confirmnew = this.formData.get('ConfirmNewPin')?.value;

      if (this.formData.value.oldPin !== this.oldUserPin) {
          this.showMsg = true;
          this.msg = 'Incorrect PIN!';
          return;
      }
    if (newP == Confirmnew) {
      console.log(this.formData.value);
      console.log(this.formData.valid);
      this.msg = 'PIN changed!';
      this.showMsg = true;
    }
    else {
      console.log("Should be the same as New Pin");
      this.msg = 'Confirm PIN should be the same as new PIN.';
      this.showMsg = true;
    }
    
  }

 
 
}
