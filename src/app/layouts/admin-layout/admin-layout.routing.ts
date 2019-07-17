import { Routes } from '@angular/router';

import { PanelComponent } from '../../panel/panel.component';
import { GanaderosComponent } from '../../ganaderos/ganaderos.component';
import {  RegistrarComponent} from '../../registrar/registrar.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { CorralesComponent } from '../../corrales/corralescomponent';
import { PanelGanaderoComponent } from 'app/panel-ganadero/panel-ganadero.component';
import { AnalisisComponent } from './../../analisis/analisis.component';
import { ReportesComponent } from './../../reportes/reportes.component';
import { MarketComponent } from './../../market/market.component';
import { AdministracionComponent } from './../../administracion/administracion.component';
import { GanadoComponent } from 'app/ganado/ganado.component';

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
    { path: 'dashboard',      component: PanelComponent },
    { path: 'dashboard_ganadero',      component: PanelGanaderoComponent },
    { path: 'ganaderos',   component: GanaderosComponent },
    { path: 'ganado',   component: GanadoComponent },
    { path: 'analisis',     component: AnalisisComponent },
    { path: 'registrar',     component:  RegistrarComponent},
    { path: 'reportes',     component: ReportesComponent },
    { path: 'market',          component: MarketComponent },
    { path: 'administracion',           component: AdministracionComponent },//crear
    { path: 'dietas',  component: NotificationsComponent },
    { path: 'corrales',        component: CorralesComponent },
];
