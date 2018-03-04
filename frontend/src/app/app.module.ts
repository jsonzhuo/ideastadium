import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { ServiceModule } from './shared/service.module';
import { AppRouterModule } from './app.router.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { CarouselComponent } from './common/carousel.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login.component';
import { RegisterComponent } from './home/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    NgbModule.forRoot(),
    ServiceModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
