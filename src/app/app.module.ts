import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalsComponent } from './animals/animals.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AnimalService } from './animal.service';

@NgModule({
  declarations: [
    AppComponent,
    AnimalDetailComponent,
    AnimalsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'animals',
        component: AnimalsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: AnimalDetailComponent
      },
    ])
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
