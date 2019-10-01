import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { AeronavesComponent } from './aeronaves/aeronaves.component';
import { DateSemanaComponent } from './date-semana/date-semana.component';
import { MarcasComponent } from './marcas/marcas.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AeronavesComponent,
  },
  {
    path: 'aeronaves',
    component: AeronavesComponent,

  },
  {
    path: '**',
    component: AeronavesComponent,
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotFoundComponent,
    CadastrarComponent,
    AeronavesComponent,
    DateSemanaComponent,
    MarcasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
