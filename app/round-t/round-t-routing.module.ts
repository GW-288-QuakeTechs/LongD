import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoundTPage } from './round-t.page';

const routes: Routes = [
  {
    path: '',
    component: RoundTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoundTPageRoutingModule {}
