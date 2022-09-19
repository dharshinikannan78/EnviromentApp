import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  segment: any;
  isValid: boolean = false;
  isProduct: boolean = false;
  isSecondProduct: boolean = false;
  isThirdProduct: boolean = false;
  constructor( private router: Router,) {


    this.products = [
      { productId: '1', product: 'iphone 13', category: 'Mobile', type: 'Components', Ingredients: 'RAM, ROM, Visual Display.', rating: 4, evnRating: 7, src: '../../assets/images/iphone-13.jpg', global: 3.5, local: 2.5, lifestyle: 4, percent: [{ star5: 0.84 }, { star4: 0.15 }, { star3: 0.5 }, { star2: 0.18 }, { star1: 0.1 }], nudge: [{ src: '../../assets/images/iphone12.png' }, { name: 'iphone' }, { price: '250' }], wink: [{ src: '../../assets/images/oneplus.png' }, { name: 'Oneplus' }, { price: '150' }] },
      { productId: '2', product: 'Panasonic Oven', category: 'Electronics', type: 'Components', Ingredients: 'Fan Blade, Hidden Bake Tray.', evnRating: 6, rating: 2, src: '../../assets/images/oven.jpg', global: 2.5, local: 3, lifestyle: 2, percent: [{ star5: 0.66 }, { star4: 0.35 }, { star3: 0.25 }, { star2: 0.28 }, { star1: 0.5 }], nudge: [{ src: '../../assets/images/p1.webp' }, { name: 'Panasonic' }, { price: '300' }], wink: [{ src: '../../assets/images/p2.png' }, { name: 'Philips' }, { price: '150' }] },
      { productId: '3', product: 'Vittara Brezza', category: 'Automobile', type: 'Components', Ingredients: 'A/C Evaporator Coil, Air filter.', evnRating: 4, rating: 3, src: '../../assets/images/vittara.jpg', global: 3, local: 4, lifestyle: 3, percent: [{ star5: 0.74 }, { star4: 0.45 }, { star3: 0.25 }, { star2: 0.38 }, { star1: 0.26 }], nudge: [{ src: '../../assets/images/s1.png' }, { name: 'Suzuki' }, { price: '1000' }], wink: [{ src: '../../assets/images/s2.png' }, { name: 'Mini Cooper' }, { price: '800' }] },
      { productId: '4', product: 'Nestle Maggi', category: 'Food', type: 'Ingredients', Ingredients: 'Wheat Flour, Palm Oil, Salt.', rating: 2.5, evnRating: 3, src: '../../assets/images/maggi.png', global: 2, local: 2.5, lifestyle: 3.5, percent: [{ star5: 0.58 }, { star4: 0.63 }, { star3: 0.57 }, { star2: 0.58 }, { star1: 0.35 }], nudge: [{ src: '../../assets/images/m1.png' }, { name: 'Nestle Maggi' }, { price: '2' }], wink: [{ src: '../../assets/images/m2.png' }, { name: 'Yippee' }, { price: '1.5' }] },
      { productId: '5', product: 'LG washing Machine', category: 'Home Appliance', type: 'Components', Ingredients: 'Washer Drain Hose, Washer Console. ', evnRating: 5, rating: 3.5, src: '../../assets/images/washing.jpg', global: 4, local: 3.5, lifestyle: 4.5, percent: [{ star5: 0.12 }, { star4: 0.42 }, { star3: 0.63 }, { star2: 0.41 }, { star1: 0.96 }], nudge: [{ src: '../../assets/images/w1.jpg' }, { name: 'LG Washing Machine' }, { price: '300' }], wink: [{ src: '../../assets/images/w2.webp' }, { name: 'Samsung' }, { price: '250' }] },
      { productId: '6', product: 'Sofa', category: 'Furniture', type: 'Material', Ingredients: 'Wood, Cotton, Steel. ', rating: 4.5, evnRating: 6, src: '../../assets/images/sofa.jpg', global: 4, local: 2.5, lifestyle: 4, percent: [{ star5: 0.80 }, { star4: 0.30 }, { star3: 0.45 }, { star2: 0.12 }, { star1: 0.08 }], nudge: [{ src: '../../assets/images/z1.png' }, { name: 'Sleepyhead' }, { price: '200' }], wink: [{ src: '../../assets/images/z2.jpg' }, { name: 'lukzer' }, { price: '100' }] },
      { productId: '7', product: 'Pedigree', category: 'Pet Food', type: 'Ingredients', Ingredients: 'Animal fat, Meat and Bone Meal. ', evnRating: 9, rating: 5, src: '../../assets/images/pedigree.jpg', global: 3, local: 2, lifestyle: 3.5, percent: [{ star5: 0.80 }, { star4: 0.30 }, { star3: 0.45 }, { star2: 0.12 }, { star1: 0.08 }], nudge: [{ src: '../../assets/images/x1.png' }, { name: 'Pedigree' }, { price: '10' }], wink: [{ src: '../../assets/images/x2.jpg' }, { name: 'Meatup' }, { price: '5' }] },
      { productId: '8', product: 'Tshirt', category: 'Clothes', type: 'Material', Ingredients: 'Cotton, Polyester,Thread. ', rating: 3.5, evnRating: 4, src: '../../assets/images/tshirt.jpeg', global: 3, local: 2, lifestyle: 3.5, percent: [{ star5: 0.80 }, { star4: 0.30 }, { star3: 0.45 }, { star2: 0.12 }, { star1: 0.07 }], nudge: [{ src: '../../assets/images/c1.png' }, { name: 'H&M' }, { price: '20' }], wink: [{ src: '../../assets/images/c2.png' }, { name: 'Zara' }, { price: '15' }] }
    ];

    this.clicked();
    this.onProduct();
    // this.isValid = false;
  }

  ngOnInit(): void {
  }
  onClick() {
    this.isValid = !this.isValid;
  }
  onProduct() {
    this.isSecondProduct = false;
    this.isThirdProduct = false;
    this.isProduct = !this.isProduct
  }
  onSecondProduct() {
    this.isProduct = false;
    this.isThirdProduct = false;
    this.isSecondProduct = !this.isSecondProduct
  }
  onThirdProduct() {
    this.isProduct = false;
    this.isSecondProduct = false;
    this.isThirdProduct = !this.isThirdProduct;
  }

  segmentChanged(ev: any) {
    this.segment = ev.value;
  }
  ionViewWillEnter() {
    this.clicked();
    this.isValid = false;
  }

  products: any
  gotit: any
  clickedProducts: any;
  star1: string;
  star2: string;
  star3: string;
  star4: string;
  star5: string;

  clicked() {
    this.star1 = 'star-outline';
    this.star2 = 'star-outline';
    this.star3 = 'star-outline';
    this.star4 = 'star-outline';
    this.star5 = 'star-outline';

    this.clickedProducts = localStorage.getItem('productId');
    for (let i = 0; i < this.products.length; i++) {
      if (this.clickedProducts == this.products[i].productId) {
        this.gotit = this.products[i];
        console.log(this.gotit, "jhghjggjj")
        switch (this.gotit.rating) {
          case 1: {
            this.star1 = 'star'
            break;
          }

          case 1.5: {
            this.star1 = 'star'
            this.star2 = 'star-half-outline'
            break;
          }

          case 2: {
            this.star1 = 'star'
            this.star2 = 'star'
            break;
          }

          case 2.5: {
            this.star1 = 'star'
            this.star2 = 'star'
            this.star3 = 'star-half-outline'
            break;
          }

          case 3: {
            this.star1 = 'star'
            this.star2 = 'star'
            this.star3 = 'star'
            break;
          }

          case 3.5: {
            this.star1 = 'star'
            this.star2 = 'star'
            this.star3 = 'star'
            this.star4 = 'star-half-outline'
            break;
          }

          case 4: {
            this.star1 = 'star'
            this.star2 = 'star'
            this.star3 = 'star'
            this.star4 = 'star'
            break;
          }

          case 4.5: {
            this.star1 = 'star'
            this.star2 = 'star'
            this.star3 = 'star'
            this.star4 = 'star'
            this.star5 = 'star-half-outline'
            break;
          }

          case 5: {
            this.star1 = 'star'
            this.star2 = 'star'
            this.star3 = 'star'
            this.star4 = 'star'
            this.star5 = 'star'
            break;
          }
        }
        break;
      }
    }
  }
  get() {
    console.log('geetha')
    this.router.navigate(['/chat']);
  }
}
