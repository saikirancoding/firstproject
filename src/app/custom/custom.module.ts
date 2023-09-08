import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from '../components/team/team.component';



@NgModule({
  declarations: [TeamComponent],
  exports:[TeamComponent],
  imports: [
    CommonModule
  ]
})
export class CustomModule { }
