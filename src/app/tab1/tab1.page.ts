import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import {
  LoadingController,
  NavController,
  Platform,
  ToastController,
} from '@ionic/angular';

import { Router } from '@angular/router';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  slideOpts = {
    preloadImages: true,
    slidesPerView: 2.2,
    speed: 500,
    autoplay: true,
  };

  products: any;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private plt: Platform,
    private router: Router,
    private scanner: BarcodeScanner
  ) {
    this.products = [
      {
        productId: '1',
        product: 'iphone 13',
        category: 'Mobile',
        rating: 4,
        src: '../../assets/images/iphone-13.jpg',
        global: 3.5,
        local: 2.5,
        lifestyle: 4,
        percent: [
          { star5: 0.84 },
          { star4: 0.15 },
          { star3: 0.5 },
          { star2: 0.18 },
          { star1: 0.1 },
        ],
      },
      {
        productId: '2',
        product: 'Panasonic Oven',
        category: 'Electronics',
        rating: 2,
        src: '../../assets/images/oven.jpg',
        global: 2.5,
        local: 3,
        lifestyle: 2,
        percent: [
          { star5: 0.66 },
          { star4: 0.35 },
          { star3: 0.25 },
          { star2: 0.28 },
          { star1: 0.5 },
        ],
      },
      {
        productId: '3',
        product: 'Vittara Brezza',
        category: 'Automobile',
        rating: 3,
        src: '../../assets/images/vittara.jpg',
        global: 3,
        local: 4,
        lifestyle: 3,
        percent: [
          { star5: 0.74 },
          { star4: 0.45 },
          { star3: 0.25 },
          { star2: 0.38 },
          { star1: 0.26 },
        ],
      },
      {
        productId: '4',
        product: 'Nestle Maggi',
        category: 'Food',
        rating: 2.5,
        src: '../../assets/images/maggi.png',
        global: 2,
        local: 2.5,
        lifestyle: 3.5,
        percent: [
          { star5: 0.58 },
          { star4: 0.63 },
          { star3: 0.57 },
          { star2: 0.58 },
          { star1: 0.35 },
        ],
      },
      {
        productId: '5',
        product: 'washing Machine',
        category: 'Home Appliance',
        rating: 3.5,
        src: '../../assets/images/washing.jpg',
        global: 4,
        local: 3.5,
        lifestyle: 4.5,
        percent: [
          { star5: 0.12 },
          { star4: 0.42 },
          { star3: 0.63 },
          { star2: 0.41 },
          { star1: 0.96 },
        ],
      },
      {
        productId: '6',
        product: 'Sofa',
        category: 'Furniture',
        rating: 4.5,
        src: '../../assets/images/sofa.jpg',
        global: 4,
        local: 2.5,
        lifestyle: 4,
        percent: [
          { star5: 0.8 },
          { star4: 0.3 },
          { star3: 0.45 },
          { star2: 0.12 },
          { star1: 0.08 },
        ],
      },
      {
        productId: '7',
        product: 'Pedigree',
        category: 'Pet Food',
        rating: 1.5,
        src: '../../assets/images/pedigree.jpg',
        global: 3,
        local: 2,
        lifestyle: 3.5,
        percent: [
          { star5: 0.8 },
          { star4: 0.3 },
          { star3: 0.45 },
          { star2: 0.12 },
          { star1: 0.08 },
        ],
      },
      {
        productId: '8',
        product: 'Clothes',
        category: 'T Shirt',
        rating: 3.5,
        src: '../../assets/images/tshirt.jpeg',
        global: 3.5,
        local: 2.5,
        lifestyle: 4,
        percent: [
          { star5: 0.84 },
          { star4: 0.15 },
          { star3: 0.5 },
          { star2: 0.18 },
          { star1: 0.1 },
        ],
      },
    ];
  }

  move(params: any) {
    console.log(params, 'id');
    localStorage.setItem('productId', params);
    this.router.navigate(['/tabs/tab2']);
  }

  success = async (message: string) => {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: 'top',
      color: 'primary',
      cssClass: 'app-update-toast',
    });

    toast.present();
  };

  error = async (message: string) => {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: 'top',
      color: 'danger',
    });

    toast.present();
  };
  scan() {
    this.scanner
      .scan()
      .then((barcodeData: any) => {
        console.log(barcodeData, 'barcodedata');
        for (let i = 0; i < this.products.length; i++) {
          if (barcodeData.text == this.products[i].productId) {
            this.move(barcodeData.text);
          }
        }
      })
      .catch((err) => {
        this.error('Whoops! Product Not Found ');
      });
  }

  get() {
    console.log('geetha')
    this.router.navigate(['/chat']);
  }
}
