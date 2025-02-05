import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TarjetasDatosComponent } from './components/tarjetas-datos/tarjetas-datos.component';



@NgModule({
  declarations: [
    SidebarComponent,
    TarjetasDatosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    TarjetasDatosComponent
  ]
})
export class SharedModule { }
