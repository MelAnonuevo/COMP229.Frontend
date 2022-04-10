import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { IndexModule } from './components/index.module';
import { IndexComponent } from './components/index.component';

import { InventoryModule } from './components/inventory/inventory.module';
import { ListComponent } from './components/inventory/list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    InventoryModule,
    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      { path: "inventory/list", component: ListComponent},
      { path: "**", redirectTo: ""}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
