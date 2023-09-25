import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewridePage } from './newride.page';

const routes: Routes = [
  {
    path: '',
    component: NewridePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewridePageRoutingModule {}
