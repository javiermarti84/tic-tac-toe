import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AlertComponent
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    AlertComponent
  ],
  providers: [
    AlertService
  ]
})
export class CoreModule { }
