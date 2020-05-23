import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PlayersComponent } from './players/players.component';
import { RegisterserviceService } from './register/registerservice.service';
import { LoginserviceService } from './login/loginservice.service';
import { PlayerserviceService } from './players/playerservice.service';
import { FormsModule} from '@angular/forms';
import { CommonModule} from '@angular/common';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { PlayerdetailsComponent } from './playerdetails/playerdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PlayersComponent,
    PlayerdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"register",
        component:RegisterComponent
      },
      {
        path:"players",
        component:PlayersComponent
      },
      {
        path:"players/:playerid",
        component:PlayerdetailsComponent
      },
      {
        path:"",
        component:RegisterComponent
      }
    ])
  ],
  providers: [HttpClient,RegisterserviceService,LoginserviceService,PlayerserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
