import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccessoriesComponent } from './products/accessories/accessories.component';
import { ComputersComponent } from './products/computers/computers.component';
import { NetworkComponent } from './products/network/network.component';
import { PartsComponent } from './products/parts/parts.component';
import { PeripheralsComponent } from './products/peripherals/peripherals.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/accessories', component: AccessoriesComponent },
  { path: 'products/computers', component: ComputersComponent },
  { path: 'products/network', component: NetworkComponent },
  { path: 'products/parts', component: PartsComponent },
  { path: 'products/peripherals', component: PeripheralsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
