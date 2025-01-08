import { Routes } from '@angular/router';
import { MesaInfoComponent } from './features/mesa-info/mesa-info.component';
import { PanelComponent } from './features/panel/panel.component';

export const routes: Routes = [
    {path: '', redirectTo: 'salon',pathMatch:'full'},
    {path:'salon',component: PanelComponent},
    {path:'mesa/:numero',component: MesaInfoComponent}

];
