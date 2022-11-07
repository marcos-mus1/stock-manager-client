import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { NewItemComponent } from './new-item/new-item.component';

@NgModule({
  declarations: [ItemsComponent, NewItemComponent],
  imports: [CommonModule],
  exports: [ItemsComponent],
})
export class ItemsModule {}
