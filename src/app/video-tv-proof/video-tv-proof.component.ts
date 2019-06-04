import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from '../services/data.service';
import { Moment } from 'moment';
const moment = require('moment-business-days');

@Component({
  selector: 'app-video-tv-proof',
  templateUrl: './video-tv-proof.component.html',
  styleUrls: ['./video-tv-proof.component.css']
})
export class VideoTvProofComponent implements OnInit {

  private _message;
  public get message() { return this._message; }
  public set message(value) {
    
    const daysToAdd = 5;
    const daysToSubtract = 0;
  
    let deliveryDate: Moment = moment(value, 'MM-DD-YYYY')
      .businessAdd(daysToAdd)
      .businessSubtract(daysToSubtract)
      .format('M/D/YYYY');
    
    this._message = deliveryDate;
    this.setToDate(deliveryDate);

  }

  dateTo: string;

  
  constructor(private data: DataService) { 
  
    }
  
    ngOnInit() {
      //init data service
      this.data.currentMessage.subscribe(message => this.message = message);
    }

    setToDate(deliveryDate: Moment) {

      console.log('Yeeeeaaah ' + deliveryDate);
      //this.dateTo = deliveryDate.businessAdd(daysToAdd)
      //.businessSubtract(daysToSubtract)
      //.format('M/D/YYYY');
    }
  }