import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AlimentListComponent } from './aliment-list/aliment-list.component';
import { CalculatorComponent } from './calculator/calculator.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: AlimentListComponent},
    { path: 'alimentsList', component: AlimentListComponent },
    { path: 'calculator', component: CalculatorComponent },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
