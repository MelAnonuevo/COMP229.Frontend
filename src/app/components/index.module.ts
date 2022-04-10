import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent } from './index.component';
import { PartialsModule } from './partials/partials.module';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    BrowserModule,
    PartialsModule,
    FormsModule
  ],
  exports:[
    IndexComponent
  ]
})

export class IndexModule { }
