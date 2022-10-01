import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BlockModule } from './modules/block/block.module';
import { AppComponent } from './modules/block/components/app/app.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule, BlockModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
