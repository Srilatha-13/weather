import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'weather',
    component: WeatherComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,

    WeatherComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDU7Isb0qf80MMlvwIyIxAdfECXpXLxlog',
      authDomain: 'weather-156df.firebaseapp.com',
      projectId: 'weather-156df',
      storageBucket: 'weather-156df.appspot.com',
      messagingSenderId: '771893866837',
      appId: '1:771893866837:web:636d6e5972f390ed477fdc',
      measurementId: 'G-1PWPSQFW4J',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
