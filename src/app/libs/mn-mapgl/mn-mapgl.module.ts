import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnMapglComponent } from './mn-mapgl/mn-mapgl.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MnMapglComponent],
  exports: [MnMapglComponent]
})
export class MnMapglModule { }
