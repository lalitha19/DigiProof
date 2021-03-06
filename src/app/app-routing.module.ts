import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './Extra/Elements/accordion/accordion.component';
import { HomeComponent } from './home/home.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64]
}

const appRoutes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'elements-accordions', component: AccordionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
