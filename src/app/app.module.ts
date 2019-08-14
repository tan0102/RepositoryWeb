import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { CarouselComponent } from './composants/carousel/carousel.component';
import { SidebarComponent } from './composants/sidebar/sidebar.component';
import { ModelsComponent } from './pages/menu/models/models.component';
import { Model3Component } from './pages/menu/model3/model3.component';
import { ModelxComponent } from './pages/menu/modelx/modelx.component';
import { ModelyComponent } from './pages/menu/modely/modely.component';
import { RoadsterComponent } from './pages/menu/roadster/roadster.component';
import { EnergyComponent } from './pages/menu/energy/energy.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { from } from 'rxjs';

import { BoutonComponent } from './composants/bouton/bouton.component';
import { FooterComponent } from './composants/footer/footer.component';
import { HeaderComponent } from './composants/header/header.component';
import { LogoComponent } from './composants/logo/logo.component';
import { ContentCarouselComponent } from './composants/carousel/content-carousel/content-carousel.component';
import { LoginComponent } from './pages/menu/login/login.component';
import { ShopComponent } from './pages/menu/shop/shop.component';
import { RegisterComponent } from './pages/menu/register/register.component';
import { ResetPasswordComponent } from './pages/menu/reset-password/reset-password.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  { path: 'energy', component: EnergyComponent },
  { path: 'models', component: ModelsComponent },
  { path: 'model3', component: Model3Component },
  { path: 'modelx', component: ModelxComponent },
  { path: 'modely', component: ModelyComponent },
  { path: 'roadster', component: RoadsterComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomepageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    SidebarComponent,
    ModelsComponent,
    Model3Component,
    ModelxComponent,
    ModelyComponent,
    RoadsterComponent,
    EnergyComponent,
    HomepageComponent,
    BoutonComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    ContentCarouselComponent,
    LoginComponent,
    ShopComponent,
    RegisterComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
