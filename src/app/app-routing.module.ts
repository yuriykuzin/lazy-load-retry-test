import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function callWithRetry(cb: () => any, retryTimes = 3, retryAfterMS = 5000) {
  return cb().catch((err: any) => {
    if (retryTimes) {
      return delay(retryAfterMS).then(() => callWithRetry(cb, retryTimes - 1));
    }

    throw err;
  });
}

function loadWithRetry(cb: () => any) {
  return () => callWithRetry(cb);
}

const routes: Routes = [
  {
    path: 'lazy-route',
    loadChildren: loadWithRetry(() =>
      import('./lazy-module/lazy-module.module').then((m) => m.LazyModule),
    ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
