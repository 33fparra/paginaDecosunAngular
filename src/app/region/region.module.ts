import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionRoutingModule } from './region-routing.module';
import { RegionComponent } from './region.component';
import { MenuComponent } from './shared/menu/menu.component';


@NgModule({
  declarations: [
    RegionComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RegionRoutingModule
  ]
})
export class RegionModule { }
