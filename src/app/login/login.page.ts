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
import { RouterLink } from '@angular/router';
import { MenuController } from '@ionic/angular';

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
    IonInputPasswordToggle,
    RouterLink
    
  ]
})
export class LoginPage implements OnInit {

  constructor(
    private titleService: Title,
    private menuCtrl: MenuController
  ) { 
    addIcons({lockOpen,lockClosed, eye, person})
  }
  async closeMenu() {
    await this.menuCtrl.close();
  }
  ionViewWillEnter() {
    // Esta função será executada toda vez que a página for acessada
    this.loadData(); // Chame sua função de atualização aqui
    // Ou simplesmente:
    
  }

  loadData() {
    // Lógica para recarregar dados da sua página
    console.log('Atualizando dados da página...');
  }

  ngOnInit() {
    //Puxa serviço de titulo da página para alterar
    this.titleService.setTitle("Login");
  }

  public menuType:string = 'push'
  
  @Input() showPassword = false;

}

