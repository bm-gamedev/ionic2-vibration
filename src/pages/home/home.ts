import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public platform: Platform, public vibration: Vibration) {
    platform.ready().then(() => {
      this.vibration.vibrate(1000);
    })
  }

  onButtonClick(){
      this.vibration.vibrate([1000,500,1000,500,1000]);
  }
}
