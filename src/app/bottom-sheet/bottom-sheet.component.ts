import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

interface oneWay {

  fname: string;
  lname: string;
  trips: Number,
  rating: number,
  pets: boolean,
  roofrack: boolean,
  luggage: boolean,
  tv: boolean,
  ac: boolean,
  wifi: boolean,
  fuel: string
  time: string,
  date: string,
  start: string,
  destination: string,
  pax: number,
  car: string,

}

interface roundT {
  pic: string
  fname?: string;
  lname?: string;
  trips?: Number,
  rating?: number,
  pets: boolean,
  roofrack: boolean,
  luggage: boolean,
  tv: boolean,
  ac: boolean,
  wifi: boolean,
  fuel: string
  sTime1: string, //time of outbound
  sTime2: string, //time of inbound
  dTime1: string, //time of arrival at destinaton1
  dTime2: string, //time of arrival at destinaton2
  airport1: string,
  airport2: string,
  date: string,
  layover: number,
  carPic: string,
  start: string,
  destination: string,
  pax: number,
}

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent implements OnInit {
  selectedSegment = 'segment1';
  resSeats: number = 0;
  seat1: boolean = false;
  seat2: boolean = false;
  seat3: boolean = false;
  seat4: boolean = false;
  seat5: boolean = false;
  seat6: boolean = false;
  seat7: boolean = false;







  trips: oneWay[] = [{ car: "assets/d-pic.png", fname: "Ronnie", lname: "Digs", trips: 3142, rating: 4.82, pets: true, roofrack: true, ac: true, tv: true, fuel: "Gas", wifi: false, date: "6/30/23", time: "2pm", luggage: true, start: "Chicago, IL", destination: "Madison, WI", pax: 2, }]
  roundTrips: roundT[] = [{ carPic: "assets/car1.jpg", pic: "assets/d-pic.png", pets: true, roofrack: true, ac: true, tv: true, fuel: "Gas", wifi: false, date: "6/30/23", sTime1: "3pm", dTime1: "4:45pm", sTime2: "9:00pm", dTime2: "10:45pm", luggage: true, start: "Chicago IL", airport1: "MIA", destination: "Milwaukee WI", pax: 2, airport2: "Mitchell Internatinal Airport", layover: 4 }]
  constructor(private modalController: ModalController,
    private router: Router) { }


  setSeats(number: number) {
    switch (number) {

      case 1:

        this.resSeats = 1;
        break;

      case 2:

        this.resSeats = 2;
        break;

      case 3:

        this.resSeats = 3;
        break;

      case 4:

        this.resSeats = 4;
        break;
      case 5:

        this.resSeats = 5;
        break;
      case 6:

        this.resSeats = 6;
        break;
      case 7:

        this.resSeats = 7;
        break;

    }
    console.log("selected seats: " + this.resSeats);
  }

  book(type: string) {
    if (type == "one") {
      console.log("one way booked")
      this.router.navigate(['tabs/newTrip']); // Replace with your actual route
      this.modalController.dismiss();
    }
    else {
      console.log("round trip booked")
    }

  }

  onChange(event: any) {
    switch (event.detail.value) {

      case "segment1":
        this.selectedSegment = "segment1"
        break;

      case "segment2":
        this.selectedSegment = "segment2"
        break;

    }

  }
  ngOnInit() { }
  dismiss() {
    this.modalController.dismiss();
  }
}
