import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private menuCtrl: MenuController) {}

  enableMenu(enable: boolean) {
    this.menuCtrl.enable(enable, 'main-menu');
  }

  toggleMenu() {
    this.menuCtrl.toggle('main-menu');
  }
}