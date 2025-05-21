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
  IonRouterOutlet

} from '@ionic/angular/standalone';
import { Title } from '@angular/platform-browser';


import { addIcons } from 'ionicons';
import { lockOpen,lockClosed, eye, person, man, mail} from 'ionicons/icons';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
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
    IonRouterOutlet
    
  ]
})
export class RegisterPage implements OnInit {

  constructor(
    private titleService: Title,
    private router: Router
  ) { 
    addIcons({lockOpen,lockClosed, eye, person, man, mail})
  }


  async login() {
    this.router.navigate(['/login'])
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
    this.titleService.setTitle("Cadastro");
  }

  
  @Input() showPassword = false;

}
