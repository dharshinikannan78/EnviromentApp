import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  product: any;
  list: any;
  segment: any;
  constructor() {
    this.segment = 'LifeStyle';
    this.product = [
      { category: 'Mobile' },
      { category: 'Clothes' },
      { category: 'FootWear' },
      { category: 'Food' },
      { category: 'Travel' },
      { category: 'Art' },
      { category: 'Products' },
      { category: 'Clothes' },
    ]

    this.list = [
      { category: 'Medicine' },
      { category: 'Vitamin ' },
      { category: 'Capsules' },
      { category: 'Drops' },

    ]

  }
  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
    console.log('Segment changed', ev);
    console.log(this.segment, 'seg')
  }

}
