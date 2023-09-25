import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  showTabs = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.showTabs = url.some(segment => segment.path === 'bookride' || 'profile' || 'profile2' || 'settings');
    });
  }
}
