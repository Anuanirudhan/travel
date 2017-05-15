import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule
  ],
  declarations: [
  	// LoginComponent
  ],
  exports: [
    
  ]
})
export class CoreModule { }
