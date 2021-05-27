import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { BecarioEffects } from './store/becario.effects';
import { StoreModule } from '@ngrx/store';
import {reducers} from "./store";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, EffectsModule.forRoot([BecarioEffects]), StoreModule.forRoot(reducers, {
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
    }})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
