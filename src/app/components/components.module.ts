import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlertComponent} from "./alert/alert.component";
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AlertComponent,
    LoadingComponent
  ],
  exports: [
    AlertComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
