import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-bookride',
  templateUrl: './bookride.page.html',
  styleUrls: ['./bookride.page.scss'],
})
export class BookridePage implements OnInit {

  constructor(private modalController: ModalController) { }

  async openBottomSheet() {
    const modal = await this.modalController.create({
      component: BottomSheetComponent,
      initialBreakpoint: 0.8,
    });
    return await modal.present();
  }
  ngOnInit() {
  }

}
