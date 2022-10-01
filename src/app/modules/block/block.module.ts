import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockRoutingModule } from './block-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './components/app/app.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AppComponent],
  imports: [CommonModule, BlockRoutingModule],
  exports: [AppComponent],
})
export class BlockModule {}
