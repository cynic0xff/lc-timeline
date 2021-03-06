import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
const moment = require('moment-business-days');

@Component({
  selector: 'app-advertisement-published',
  templateUrl: './advertisement-published.component.html',
  styleUrls: ['./advertisement-published.component.css']
})
export class AdvertisementPublishedComponent implements OnInit {

  toDate: string;
  private _message;
  public get message() { return this._message; }
  public set message(value) {
   
    const daysToAdd = 11;
    const daysToSubtract = 0;

    console.log(value);

    let deliveryDate = moment(value, 'MM-DD-YYYY')
      .businessAdd(daysToAdd)
      .businessSubtract(daysToSubtract)
      .format('M/D/YYYY');

    this._message = deliveryDate;
    this.setToDate(deliveryDate);
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

  setToDate(deliveryDate) {

    this.toDate = moment(deliveryDate, 'MM-DD-YYYY')
    .businessAdd(29)
    .format('M/D/YYYY');
  }

}