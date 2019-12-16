import { Routes, RouterModule } from '@angular/router';
import { RolComponent } from './rol/rol.component';
import { MantenimientosComponent } from './mantenimientos.component';




const mantenimientoRoutes: Routes = [

    { path: '',
    component: MantenimientosComponent,
    children: [
       { path: 'rol', component: RolComponent },
       { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
      ]
    },

];

export const MANTENIMIENTOS_ROUTES = RouterModule.forChild(mantenimientoRoutes);
