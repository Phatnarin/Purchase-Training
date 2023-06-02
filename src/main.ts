import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent,
  {providers: [
    provideProtractorTestingSupport(), 
    provideRouter(routeConfig), 
    importProvidersFrom(HttpClientModule), 
    provideAnimations()
  ]
}
).catch(err => console.error(err));
