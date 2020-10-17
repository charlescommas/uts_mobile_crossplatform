import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { ViewlistComponent } from './components/viewlist/viewlist.component';
import { ViewgridComponent } from './components/viewgrid/viewgrid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule
  ],
  declarations: [ProductsPage, ViewlistComponent, ViewgridComponent]
})
export class ProductsPageModule {}
