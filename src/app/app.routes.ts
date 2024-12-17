import { Routes } from '@angular/router';
import { SalonComponent } from './features/salon/salon.component';

export const routes: Routes = [
    {path: '', redirectTo: 'salon',pathMatch:'full'},
    {path:'salon',component: SalonComponent}
];
