import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonFilterSelectComponent } from './ionFilterSelect';
import { PipesModule } from './searchPipe.module';

@NgModule({
  declarations: [
    IonFilterSelectComponent,
  ],

  imports: [
    IonicPageModule.forChild(IonFilterSelectComponent),
    PipesModule
  ],

  exports: [
    IonFilterSelectComponent
  ]
})

export class IonFilterSelect {}