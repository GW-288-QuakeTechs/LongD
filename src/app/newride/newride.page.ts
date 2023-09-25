import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newride',
  templateUrl: './newride.page.html',
  styleUrls: ['./newride.page.scss'],
})
export class NewridePage implements OnInit {
  count: number  = 0;
  showDate: boolean = false;
  showTime: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  removeseat(){
    this.count-=1;
  }
  addseat(){
    this.count+=1;
  }
  openDate() {
    this.showDate = true;
    
  }
  cancelDate() {
    this.showDate = false;
  }
  openTime(){
    this.showTime = true;
  }
  cancelTime(){
    this.showTime = false;
  }
}
