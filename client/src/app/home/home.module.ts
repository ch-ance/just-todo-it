import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { CreateComponent } from './create/create.component';
import { ViewListComponent } from './view-list/view-list.component';

@NgModule({
  declarations: [CreateComponent, ViewListComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, ReactiveFormsModule]
})
export class HomeModule {}
