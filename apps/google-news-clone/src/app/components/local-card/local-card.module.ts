import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalCardComponent } from "./local-card.component";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import {  MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,

    MatIconModule,
    MatMenuModule,
  ],
  declarations: [LocalCardComponent],
  exports: [LocalCardComponent],
})
export class LocalCardModule { }
