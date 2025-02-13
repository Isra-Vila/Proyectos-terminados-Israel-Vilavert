import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    HomePageComponent,
    SearchboxComponent,
    CardListComponent 
  ],
  imports: [
    CommonModule,
    SharedModule
],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
