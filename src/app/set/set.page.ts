import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set',
  templateUrl: './set.page.html',
  styleUrls: ['./set.page.scss'],
})
export class SetPage implements OnInit {
  selectedDates: string[] = ['2023-05-19', '2023-05-20',  '2023-05-21', '2023-05-22', '2023-05-23','2023-05-24', '2023-05-25', '2023-05-25', '2023-05-26', '2023-05-27','2023-05-28', '2023-05-29', '2023-05-30', '2023-05-31']; // Replace with your selected dates

  constructor() { }

  ngOnInit() {
  }

  saveSchedule() {
    // TODO: Implement save schedule logic
  }
}
