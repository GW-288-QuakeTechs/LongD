import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  constructor(private modalController: ModalController, private param: NavParams) { }

  type: string = this.param.get("bookingType");

  method: string = "";

  ngOnInit() {

    if (this.type == "one") {
      this.method = "oneDub"
    } else {
      this.method = "roundT"
    }

  }
  dismiss() {
    this.modalController.dismiss();

  }

}
