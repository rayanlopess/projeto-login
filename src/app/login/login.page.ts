import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {  
  IonButton,
  IonContent,
  IonHeader,
  IonGrid,
  IonMenu,
  IonMenuToggle,
  IonRow,
  IonCol,
  IonTitle,
  IonToolbar, 
  IonMenuButton,
  IonButtons, 
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
} from '@ionic/angular/standalone';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonButton,
    IonContent,
    IonHeader,
    IonGrid,
    IonMenu,
    IonMenuToggle,
    IonRow,
    IonCol,
    IonTitle,
    IonToolbar,
    IonMenuButton, 
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle
  ]
})
export class LoginPage implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    //Puxa serviço de titulo da página para alterar
    this.titleService.setTitle("Login");
  }

  public menuType:string = 'push'


}

