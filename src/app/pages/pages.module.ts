import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../reutilizables/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';

// modulos
import { MantenimientoModule } from './mantenimientos/mantenimientos.module';
import { RxjsComponent } from './rxjs/rxjs.component';




@NgModule ({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
        IncrementadorComponent,
        AccountSettingsComponent,
        MantenimientosComponent,
        RxjsComponent,

    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
        MantenimientosComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        MantenimientoModule
    ]
})

export class PagesModule { }
