import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons],
})
export class HomePage {
  
  constructor(
    public router: Router
  ) {}
    ngOnInit(){
      console.log(this.router.url);

    }
}
