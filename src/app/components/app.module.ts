import { RouterModule } from '@angular/router';
import { LoaderService } from './../ui-controls/loader/loader.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { UtilitiesServiceModule } from '../services/utilities/utilities-service.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UtilitiesServiceModule,
    RouterModule
  ],
  providers: [LoaderService],
  bootstrap: [AppComponent],
  exports: [UtilitiesServiceModule]
})
export class AppModule { }
