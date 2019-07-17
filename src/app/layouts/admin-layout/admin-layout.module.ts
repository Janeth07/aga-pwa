import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { PanelComponent } from '../../panel/panel.component';
import { GanaderosComponent } from '../../ganaderos/ganaderos.component';
import { RegistrarComponent } from '../../registrar/registrar.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';

import { GanadoComponent } from '../../ganado/ganado.component';

import { CorralesComponent } from '../../corrales/corralescomponent';
import { PanelGanaderoComponent } from 'app/panel-ganadero/panel-ganadero.component';
import { DietasComponent } from '../../dietas/dietas.component';

import { AnalisisComponent } from './../../analisis/analisis.component';
import { ReportesComponent } from './../../reportes/reportes.component';
import { MarketComponent } from './../../market/market.component';
import { AdministracionComponent } from './../../administracion/administracion.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    PanelComponent,
    GanaderosComponent,
    RegistrarComponent,
    TypographyComponent,
    IconsComponent,
    GanadoComponent,    
    CorralesComponent,
    PanelGanaderoComponent,
    DietasComponent,
    AnalisisComponent,
    ReportesComponent,
    MarketComponent,
    AdministracionComponent

  ]
})

export class AdminLayoutModule {}
