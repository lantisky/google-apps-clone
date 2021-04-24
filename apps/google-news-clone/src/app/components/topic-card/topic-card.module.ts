import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicCardComponent } from "./topic-card.component";
import { AvatarModule } from "ngx-avatar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    AvatarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
  ],
  declarations: [TopicCardComponent],
  exports: [TopicCardComponent],
})
export class TopicCardModule { }
