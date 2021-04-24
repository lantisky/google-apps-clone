import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchesTabRoutingModule } from "./searches-tab-routing.module";
import { SearchesTabComponent } from "./searches-tab.component";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  imports: [
    MatTabsModule,
    CommonModule,
    SearchesTabRoutingModule
  ],
  declarations: [SearchesTabComponent],
  exports: [SearchesTabComponent],
})
export class SearchesTabModule { }
