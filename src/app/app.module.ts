import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import 'rxjs/Rx';

import { rootReducer } from './store/rootReducer';
import { ApartmentActions } from './store/apartment/apartment.actions';

import { AppComponent } from './app.component';
import { ApartmentComponent } from './components/apartment/apartment.component';

import { ApartmentService } from './services/apartment.service';

import { ApartmentEffects } from './services/apartment';

@NgModule({
  declarations: [
    AppComponent,
    ApartmentComponent
  ],
  imports: [
    BrowserModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([ApartmentEffects])
  ],
  providers: [
    ApartmentActions,
    ApartmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
