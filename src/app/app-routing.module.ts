import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeLayoutComponent } from './components/layout/home-layout/home-layout.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GoComponent } from './components/go/go.component';
import { BankComponent } from './components/bank/bank.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'go',
        component: GoComponent
      },
      {
        path: 'bank',
        component: BankComponent
      },


    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
