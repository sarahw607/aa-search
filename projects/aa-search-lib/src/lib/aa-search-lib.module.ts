import { NgModule } from '@angular/core';
import { AaSearchLibComponent } from './aa-search-lib.component';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AaSearchLibComponent],
  imports: [BrowserModule, FormsModule],
  exports: [AaSearchLibComponent],
})
export class AaSearchLibModule {}
