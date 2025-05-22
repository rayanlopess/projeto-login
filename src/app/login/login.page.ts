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
  IonInputPasswordToggle,
  IonRippleEffect

} from '@ionic/angular/standalone';
import { Title } from '@angular/platform-browser';


import { addIcons } from 'ionicons';
import { lockOpen,lockClosed, eye, person} from 'ionicons/icons';
import { Router, RouterLink } from '@angular/router';

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
    RouterLink,
    IonRippleEffect
    
  ]
})
export class LoginPage implements OnInit {

  constructor(
    private titleService: Title,
    private router: Router
  ) { 
    addIcons({lockOpen,lockClosed, eye, person})
  }

  async cadastrar() {
    let home = document.querySelector('.home');
    home?.classList.remove('active');
    
    let login = document.querySelector('.login');
    login?.classList.remove('active');
    
    let register = document.querySelector('.register');
    register?.classList.add('active');
    
    this.router.navigate(['/register'])


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

  
  @Input() showPassword = false;

}

