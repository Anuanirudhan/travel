import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { DashboardProfileComponent } from './profile/dashboard-profile.component';
import { DashboardHistoryComponent } from './history/dashboard-history.component';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../authentication/services/auth-guard.service';

const appRoutes: Routes = [
      { path: 'dashboard', component: DashboardComponent,
        children: [
          { path: '', redirectTo: 'profile', pathMatch: 'full' },
          { path: 'profile', component: DashboardProfileComponent },
          { path: 'history', component: DashboardHistoryComponent }
        ]
      }
    ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  declarations: [
    DashboardComponent,
    DashboardProfileComponent,
    DashboardHistoryComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class DashboardRoutingModule { }