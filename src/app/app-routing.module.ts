import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [ 
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'bookride',
    loadChildren: () => import('./bookride/bookride.module').then(m => m.BookridePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },

  {
    path: 'signupa',
    loadChildren: () => import('./signupa/signupa.module').then( m => m.SignupaPageModule)
  },
  {
    path: 'signupr',
    loadChildren: () => import('./signupr/signupr.module').then( m => m.SignuprPageModule)
  },
  {
    path: 'signupd',
    loadChildren: () => import('./signupd/signupd.module').then( m => m.SignupdPageModule)
  },
  {
    path: 'profile2',
    loadChildren: () => import('./profile2/profile2.module').then( m => m.Profile2PageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'newride',
    loadChildren: () => import('./newride/newride.module').then(m => m.NewridePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'rider-availability',
    loadChildren: () => import('./rider-availability/rider-availability.module').then( m => m.RiderAvailabilityPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'one-dub',
    loadChildren: () => import('./one-dub/one-dub.module').then( m => m.OneDubPageModule)
  },
  {
    path: 'round-t',
    loadChildren: () => import('./round-t/round-t.module').then( m => m.RoundTPageModule)
  },
  {
    path: 'newTrip',
    loadChildren: () => import('./new-trip/new-trip.module').then( m => m.NewTripPageModule)
  },

  {
    path: 'vehicledetails',
    loadChildren: () => import('./vehicledetails/vehicledetails.module').then(m => m.VehicleDetailsPageModule)
  },  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
