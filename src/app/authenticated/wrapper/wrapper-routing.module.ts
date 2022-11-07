import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { MouvementsComponent } from './mouvements/mouvements.component';
import { SettingsComponent } from './settings/settings.component';
import { SummaryComponent } from './summary/summary.component';
import { UsersComponent } from './users/users.component';
import { WrapperComponent } from './wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'items',
        component: ItemsComponent,
      },
      {
        path: 'mouvements',
        component: MouvementsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'summary',
        component: SummaryComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WrapperRoutingModule {}
