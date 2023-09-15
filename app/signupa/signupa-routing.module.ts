import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupaPage } from './signupa.page';

const routes: Routes = [
  {
    path: '',
    component: SignupaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupaPageRoutingModule {}
