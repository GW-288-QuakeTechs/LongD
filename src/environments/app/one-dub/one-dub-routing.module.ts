import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneDubPage } from './one-dub.page';

const routes: Routes = [
  {
    path: '',
    component: OneDubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneDubPageRoutingModule {}
