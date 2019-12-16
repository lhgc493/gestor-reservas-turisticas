import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';

// guards
import { LoginGuardGuard } from '../services/index.service';

// import { RolComponent } from './mantenimientos/rol/rol.component';
import { RxjsComponent } from './rxjs/rxjs.component';




const pagesRoutes: Routes = [

    { path: '',
    component: PagesComponent,
    canActivate: [ LoginGuardGuard ],
    children: [
       { path: 'dashboard', component: DashboardComponent },
       { path: 'grafica1', component: Grafica1Component },
       { path: 'progress', component: ProgressComponent },
       { path: 'account-setting', component: AccountSettingsComponent },
       { path: 'mantenimientos', component: MantenimientosComponent },
       { path: 'rxjs', component: RxjsComponent },
      // { path: 'mantenimientos/rol', component: RolComponent },
       { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
      ]
    },

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
