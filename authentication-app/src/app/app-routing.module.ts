import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationModalComponent } from './authentication-pages/containers/authentication-modal/authentication-modal.component';

const routes: Routes = [
  { path: '', component: AuthenticationModalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
