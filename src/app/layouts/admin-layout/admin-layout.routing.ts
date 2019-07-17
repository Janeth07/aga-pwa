import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { DashboardGanaderoComponent } from 'app/dashboard-ganadero/dashboard-ganadero.component';
import { AnalisisComponent } from './../../analisis/analisis.component';
import { ReportesComponent } from './../../reportes/reportes.component';
import { MarketComponent } from './../../market/market.component';
import { AdministracionComponent } from './../../administracion/administracion.component';
import { MapsComponent } from 'app/maps/maps.component';
import { DietasComponent } from 'app/dietas/dietas.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'dashboard_ganadero',      component: DashboardGanaderoComponent },
    { path: 'ganaderos',   component: UserProfileComponent },
    { path: 'ganado',   component: MapsComponent },
    { path: 'analisis',     component: AnalisisComponent },
    { path: 'registrar',     component:  TableListComponent},
    { path: 'reportes',     component: ReportesComponent },
    { path: 'market',          component: MarketComponent },
    { path: 'administracion',           component: AdministracionComponent },//crear
    { path: 'dietas',  component: DietasComponent },
    { path: 'corrales',        component: UpgradeComponent },
];
