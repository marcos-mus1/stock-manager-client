import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WrapperRoutingModule } from './wrapper-routing.module';
import { HomeModule } from './home/home.module';
import { ItemsModule } from './items/items.module';
import { SettingsModule } from './settings/settings.module';
import { SummaryModule } from './summary/summary.module';
import { UsersModule } from './users/users.module';
import { MouvementsModule } from './mouvements/mouvements.module';
import { WrapperComponent } from './wrapper.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [WrapperComponent],
  imports: [
    CommonModule,
    WrapperRoutingModule,
    HomeModule,
    ItemsModule,
    MouvementsModule,
    SettingsModule,
    SummaryModule,
    UsersModule,
    MatMenuModule,
  ],
})
export class WrapperModule {}
