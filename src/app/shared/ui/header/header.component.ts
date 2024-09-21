import { Component, OnInit } from '@angular/core';

interface MenuOption {
  route: string;
  text: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent implements OnInit {
  userMenuOptions: MenuOption[] = [];
  administratorMenuOptions: MenuOption[] = [];
  mainMenu: MenuOption[] = [];
  ngOnInit() {
    this.mainMenu = this.loadOptions('user');
  }
  loadOptions(userType: string): MenuOption[] {
    if (userType === 'user') {
      return [
        ...this.userMenuOptions,
        ...[
          {
            route: '/',
            text: 'Home',
          },
          {
            route: '/planes',
            text: 'Planes',
          },
          {
            route: '/recargas',
            text: 'Recargar',
          },
          {
            route: '/ayuda',
            text: 'Ayuda',
          },
        ],
      ];
    }

    if (userType === 'admin') {
      return [];
    }
    return [];
  }
}
