import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import {  AuthGuard} from './guards/auth.guard';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RestauracionComponent } from './restauracion/restauracion.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

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
