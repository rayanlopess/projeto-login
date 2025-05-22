import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle} from '@ionic/angular/standalone';
import moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle],
})
export class HomePage {

  public nome:string = "Rayan";
  currentTime: string = '';
  private timeInterval: any;
 

  constructor(
    public router: Router
  ) {
    this.updateTime();
  }
  ngOnInit(){
      console.log(this.router.url);
      this.timeInterval = setInterval(() => {
        this.updateTime();
      }, 1000);
  }
    updateTime() {
     
      this.currentTime = moment().format('DD/MM/YYYY HH:mm:ss');
    }
}
