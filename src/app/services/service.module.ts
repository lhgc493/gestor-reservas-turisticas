import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// servicios centralizados en este modulo
import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService

} from './index.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
   SettingsService,
   SidebarService,
   SharedService,
   UsuarioService
  ]
})
export class ServiceModule { }
