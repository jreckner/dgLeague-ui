// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// root component
import { AppComponent } from './app.component';

// internal Routes
import { APP_ROUTER } from './app.routes';
import { FooterComponent } from './components/footer.component';
import { HeaderComponent } from './components/header.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    APP_ROUTER
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
