import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnonceComponent } from './components/annonce/annonce.component';
import { AnnonceDetailComponent } from './components/annonce-detail/annonce-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { GarageComponent } from './components/garage/garage.component';
import { ProfilComponent } from './components/profil/profil.component';
import { SearchComponent } from './components/search/search.component';
import { GererProfilComponent } from './components/gerer-profil/gerer-profil.component';
import { GererAnnonceComponent } from './components/gerer-annonce/gerer-annonce.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AnnonceComponent,
    AnnonceDetailComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    GarageComponent,
    ProfilComponent,
    SearchComponent,
    GererProfilComponent,
    GererAnnonceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
