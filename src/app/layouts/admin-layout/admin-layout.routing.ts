import { Routes } from '@angular/router';

import { PanelComponent } from '../../panel/panel.component';
import { GanaderosComponent } from '../../ganaderos/ganaderos.component';
import {  RegistrarComponent} from '../../registrar/registrar.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { CorralesComponent } from '../../corrales/corralescomponent';
import { PanelGanaderoComponent } from 'app/panel-ganadero/panel-ganadero.component';
import { AnalisisComponent } from './../../analisis/analisis.component';
import { ReportesComponent } from './../../reportes/reportes.component';
import { MarketComponent } from './../../market/market.component';
import { AdministracionComponent } from './../../administracion/administracion.component';

import { GanadoComponent } from 'app/ganado/ganado.component';

import { DietasComponent } from 'app/dietas/dietas.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: PanelComponent },
    { path: 'dashboard_ganadero',      component: PanelGanaderoComponent },
    { path: 'ganaderos',   component: GanaderosComponent },
    { path: 'ganado',   component: GanadoComponent },
    { path: 'analisis',     component: AnalisisComponent },
    { path: 'registrar',     component:  RegistrarComponent},
    { path: 'reportes',     component: ReportesComponent },
    { path: 'market',          component: MarketComponent },
    { path: 'administracion',           component: AdministracionComponent },//crear
    { path: 'corrales',        component: CorralesComponent },
    { path: 'dietas',  component: DietasComponent },
];
