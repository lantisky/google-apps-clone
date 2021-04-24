import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryTabRoutingModule } from "./library-tab-routing.module";
import { LibraryTabComponent } from "./library-tab.component";
import { MatDividerModule } from "@angular/material/divider";
import { MatTabsModule } from "@angular/material/tabs";
import { TopicCardModule } from "../../topic-card/topic-card.module";
import { LocalCardModule } from "../../local-card/local-card.module";

@NgModule({
  imports: [
    MatDividerModule,
    MatTabsModule,
    CommonModule,
    LibraryTabRoutingModule,
    TopicCardModule,
    LocalCardModule
  ],
  declarations: [LibraryTabComponent],
  exports: [LibraryTabComponent],
})
export class LibraryTabModule { }
