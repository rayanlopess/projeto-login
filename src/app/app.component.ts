import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink} from '@angular/router';
import { MenuController } from '@ionic/angular/standalone';
import { IonApp, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonRouterOutlet, IonRippleEffect, IonIcon} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logIn, home, personAdd,} from 'ionicons/icons';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonRouterOutlet, RouterLink, IonRippleEffect, IonIcon]
})
export class AppComponent implements OnInit {
  public menuType: string = 'push'; // ou 'over', 'reveal'
  public menuName:string = '';
 

  constructor(
    private router: Router,
    private menuCtrl: MenuController
  ) {
    addIcons({logIn, personAdd, home})
  }

  ngOnInit() {
    this.setupMenu();
  
    
  }

  private setupMenu() {
    // 1. Atribua um ID único ao menu
    this.menuCtrl.enable(true, 'main-menu');

    // 2. Feche o menu ao navegar
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.menuCtrl.close('main-menu');
        
        // 3. Forçar atualização se necessário
        setTimeout(() => {
          this.menuCtrl.enable(false, 'main-menu');
          this.menuCtrl.enable(true, 'main-menu');
        }, 100);
      }
    });
  }

  // Método para fechar o menu após clique
  closeMenu() {
    this.menuCtrl.close('main-menu');
  }
  botaoHome(){
    let home = document.querySelector('.home');
    home?.classList.add('ative');
    
    let login = document.querySelector('.login');
    login?.classList.remove('ative');
    
    let register = document.querySelector('.register');
    register?.classList.remove('ative');
    
  }
  botaoLogin(){
    let home = document.querySelector('.home');
    home?.classList.remove('ative');
    
    let login = document.querySelector('.login');
    login?.classList.add('ative');
    
    let register = document.querySelector('.register');
    register?.classList.remove('ative');
  }
  botaoCadastro(){
    let home = document.querySelector('.home');
    home?.classList.remove('ative');
    
    let login = document.querySelector('.login');
    login?.classList.remove('ative');
    
    let register = document.querySelector('.register');
    register?.classList.add('ative');
  }
}