import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { BecarioEffects } from './store/becario.effects';
import { StoreModule } from '@ngrx/store';
import {reducers} from "./store";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BecarioListComponent } from './becario-list/becario-list.component';
import { AddBecarioComponent } from './add-becario/add-becario.component';


@NgModule({
  declarations: [AppComponent, BecarioListComponent, AddBecarioComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule,ReactiveFormsModule,FormsModule,
     EffectsModule.forRoot([BecarioEffects]), StoreModule.forRoot(reducers, {
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
    }})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
