import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import {  AuthGuard} from './guards/auth.guard';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RestauracionComponent } from './restauracion/restauracion.component';
import { LoginComponent } from './login/login.component';
import {PanelComponent } from './panel/panel.component';
import { GanaderosComponent } from './ganaderos/ganaderos.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { GanadoComponent } from './ganado/ganado.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CorralesComponent } from './corrales/corralescomponent';

const routes: Routes =[
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  }, {
    path: 'restauracion',
    component: RestauracionComponent,
    pathMatch: 'full',
  },
   {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
    //{ path: 'dashboard',      component: DashboardComponent,canActivate:[AuthGuard]},
     //{ path: 'user-profile',   component: UserProfileComponent,canActivate:[AuthGuard] },
     //{ path: 'table-list',     component: TableListComponent ,canActivate:[AuthGuard]},
    // { path: 'typography',     component: TypographyComponent,canActivate:[AuthGuard] },
    // { path: 'icons',          component: IconsComponent,canActivate:[AuthGuard] },
    //{ path: 'maps',           component: MapsComponent,canActivate:[AuthGuard] },
  // { path: 'notifications',  component: NotificationsComponent,canActivate:[AuthGuard] },
   //{ path: 'upgrade',        component: UpgradeComponent },
  // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' },
  // {path:'restauracion', component:RestauracionComponent},
  // {path:'login', component:LoginComponent}

];

@NgModule({
  imports: [
  CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
