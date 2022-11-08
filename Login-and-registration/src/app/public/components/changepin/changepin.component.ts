import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-changepin',
  templateUrl: './changepin.component.html',
  styleUrls: ['./changepin.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ChangepinComponent {

  public showMsg: boolean = false;
  public msg: string = '';
    
  formData = new FormGroup({
    oldPin: new FormControl('', [Validators.required]),
    newPin: new FormControl('', [Validators.required]),
    ConfirmNewPin: new FormControl('', [Validators.required]),
  });

  OnSubmit(): void {
    const newP = this.formData.get('newPin')?.value;
    const Confirmnew = this.formData.get('ConfirmNewPin')?.value;
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

  ApplyValidation(): void {
    const newP = this.formData.get('newPin')?.value;
    this.formData.get('newPin')?.setValidators([Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]+')]);
    this.formData.get('ConfirmNewPin')?.setValidators([Validators.required, Validators.maxLength(4), Validators.minLength(4), Validators.pattern('[0-9]+')]);
    this.formData.get('oldPin')?.setValidators([Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]+')]);

    this.formData.controls['newPin'].updateValueAndValidity();
    this.formData.controls['ConfirmNewPin'].updateValueAndValidity();
    this.formData.controls['oldPin'].updateValueAndValidity();

    console.log("validating");
  }
 
}
