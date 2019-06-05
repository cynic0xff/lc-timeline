import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatDatepickerInputEvent } from '@angular/material';
import { DatePipe } from '@angular/common'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-start-date',
  templateUrl: './start-date.component.html',
  styleUrls: ['./start-date.component.css']
})
export class StartDateComponent implements OnInit {

  private date: string;
  message: String;

  constructor(private data: DataService, public datepipe: DatePipe) { }

  ngOnInit() {
   
  }

  /*sendData(date) {

        //update the ds
        this.data.update(date);
  }*/

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.data.update(this.datepipe.transform(event.value, 'MM-dd-yyyy'));
  }

}
