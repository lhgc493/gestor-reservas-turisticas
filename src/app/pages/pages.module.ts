import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

// pipe module
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';





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
        ProfileComponent,

    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
        MantenimientosComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        MantenimientoModule,
        PipesModule
    ]
})

export class PagesModule { }
