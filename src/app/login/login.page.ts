import { Component, OnInit, Input } from '@angular/core';
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
  IonInput,
  IonIcon,
  IonCardContent,
  IonList,
  IonItem, 
  IonAvatar,
  IonCheckbox,
  IonLabel,
  IonInputPasswordToggle

} from '@ionic/angular/standalone';
import { Title } from '@angular/platform-browser';


import { addIcons } from 'ionicons';
import { lockOpen,lockClosed, eye, person} from 'ionicons/icons';

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
    IonIcon,
    IonInput,
    IonCardContent,
    IonAvatar,
    IonCheckbox,
    IonLabel,
    IonInputPasswordToggle
    
  ]
})
export class LoginPage implements OnInit {

  constructor(
    private titleService: Title
  ) { 
    addIcons({lockOpen,lockClosed, eye, person})
  }

  ngOnInit() {
    //Puxa serviço de titulo da página para alterar
    this.titleService.setTitle("Login");
  }

  public menuType:string = 'push'
  
  @Input() showPassword = false;

}

