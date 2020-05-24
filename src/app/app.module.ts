import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

import { NgxJsonLdModule } from 'ngx-json-ld';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgxJsonLdModule
  ],
  providers: [
    {provide: 'googleTagManagerId', useValue: 'GTM-5FN2JDL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
