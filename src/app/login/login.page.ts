import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  segment: any;
  constructor(
    private router: Router,
    private modalcontroller: ModalController
  ) { }

  isopen: boolean = true;
  isSignUp: boolean = false;

  ngOnInit() {
    this.segment = "Login";
  }

  logIn() {
    this.modalcontroller.dismiss();
    this.router.navigate(['/tabs/tab1']);
  }
  getClick() {
    this.isSignUp = true;
  }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
    console.log('Segment changed', ev);
    console.log(this.segment, 'seg')
  }

}

