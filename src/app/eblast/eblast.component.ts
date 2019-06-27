import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
const moment = require('moment-business-days');

@Component({
  selector: 'app-eblast',
  templateUrl: './eblast.component.html',
  styleUrls: ['./eblast.component.css']
})
export class EblastComponent implements OnInit {

  private _message;
  public get message() { return this._message; }
  public set message(value) {
    
    const daysToAdd = 2;
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
  
  }