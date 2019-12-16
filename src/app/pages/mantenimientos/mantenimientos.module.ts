import { NgModule } from '@angular/core';



import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RolComponent } from './rol/rol.component';
import { MANTENIMIENTOS_ROUTES } from './mantenimientos.routes';




@NgModule ({
    declarations: [
    RolComponent
    ],
    exports: [
        RolComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        MANTENIMIENTOS_ROUTES
    ]
})

export class MantenimientoModule { }
