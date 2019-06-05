import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatDatepickerInputEvent } from '@angular/material';
import { DatePipe } from '@angular/common'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-start-date',
  templateUrl: './start-date.component.html',
  styleUrls: ['./start-date.component.css'],
  providers:[{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})
export class StartDateComponent implements OnInit {

  private date: string;
  message: String;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  constructor(private data: DataService, public datepipe: DatePipe, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  /*sendData(date) {

        //update the ds
        this.data.update(date);
  }*/

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.data.update(this.datepipe.transform(event.value, 'MM-dd-yyyy'));
  }

}
