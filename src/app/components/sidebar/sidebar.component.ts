import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Panel',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Ganado',  icon:'person', class: '' },
    { path: '/table-list', title: 'Analisis',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Reportes',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Market',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Administración',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Dietas',  icon:'description', class: '' },
    { path: '/upgrade', title: 'Corrales',  icon:'view_module', class: '' },
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
