import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class ClientFormComponent implements OnInit {
  generalFormGroup: FormGroup;
  authFormGroup: FormGroup;
  tokenFormGroup: FormGroup;
  consentFormGroup: FormGroup;
  deviceFlowFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.generalFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.authFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.tokenFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.consentFormGroup = this.formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.deviceFlowFormGroup = this.formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }

}
