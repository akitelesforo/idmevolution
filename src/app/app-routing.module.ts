import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnDemandPreloadStrategy } from './strategies/on-demand-preload.strategy';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AuthCallbackComponent } from './core/auth-callback/auth-callback.component';

const routes: Routes = [
  // {
  //   path: 'auth-callback',
  //   loadChildren: () => import('./auth-callback/auth-callback.component').then(m => m.AuthCallbackComponent),
  //   data: { preload: true }
  // }
  { path: 'auth-callback', component: AuthCallbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: OnDemandPreloadStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
