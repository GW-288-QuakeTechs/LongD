// Import necessary Angular modules and components
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  // Define the component's selector, HTML template, and style
  selector: 'app-bookride',
  templateUrl: './bookride.page.html', // HTML template file
  styleUrls: ['./bookride.page.scss'], // Style or SCSS file
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
    // Lifecycle hook: Code to execute when the component is initialized
  }

}
