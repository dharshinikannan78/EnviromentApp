import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private modalcontroller: ModalController
  ) { }

  isopen: boolean = true;

  ngOnInit() {
    this.segment = 'loginIn';
  }

  logIn() {
    this.modalcontroller.dismiss();
    this.router.navigate(['/tabs/tab1']);
  }

  segment: string = 'scale';

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
}

