import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../services/data.service';
import { __asyncDelegator } from 'tslib';
const moment = require('moment-business-days');

@Component({
  selector: 'app-property-site',
  templateUrl: './property-site.component.html',
  styleUrls: ['./property-site.component.css']
})
export class PropertySiteComponent implements OnInit {

 private _message;
 public get message() { return this._message; }
 public set message(value) {
   
    const daysToAdd = 1;
    const daysToSubtract = 0;

    console.log(value);

    let deliveryDate = moment(value, 'MM-DD-YYYY')
      .businessAdd(daysToAdd)
      .businessSubtract(daysToSubtract)
      .format('M/D/YYYY');

    this._message = deliveryDate;
 }
  
  constructor(private data: DataService) { 

  }

  ngOnInit() {
    //init data service
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  ngOnChanges() {
    console.log('Changed...');
  }

}
