import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Timeline } from '../../class/TimeLine';
const moment = require('moment-business-days');

@Component({
  selector: 'app-mailer-proof',
  templateUrl: './mailer-proof.component.html',
  styleUrls: ['./mailer-proof.component.css']
})
export class MailerProofComponent implements OnInit {

  private _message;
  public get message() { return this._message; }
  public set message(value) {
    
  const tl = new Timeline();

    const daysToAdd = tl.locations[2].daysToComplete;
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