import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CrimesService} from './crimes.service';
import { ListCrimesComponent } from './Components/list-crimes/list-crimes.component';
import { AccueilComponent } from './Components/accueil/accueil.component';
import {InfosVileComponent} from './Components/infos-vile/infos-vile.component';

const appRoutes: Routes = [
  { path: 'Resume', component: ListCrimesComponent },
  {path: 'Accueil', component : AccueilComponent},
  {path: 'InfosVille/:ville/:annee', component : InfosVileComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ListCrimesComponent,
    AccueilComponent,
    InfosVileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [CrimesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
