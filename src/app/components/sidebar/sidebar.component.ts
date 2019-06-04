import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

    { path: '/dashboard', title: 'Panel',  icon: 'pie_chart', class: '' },
    { path: '/user-profile', title: 'Ganadero',  icon:'person', class: '' },
    { path: '/table-list', title: 'Analisis',  icon:'insert_chart_outlined', class: '' },
    { path: '/typography', title: 'Reportes',  icon:'assignment', class: '' },
    { path: '/icons', title: 'Market',  icon:'shopping_cart', class: '' },
    { path: '/maps', title: 'Administracion',  icon:'event', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
