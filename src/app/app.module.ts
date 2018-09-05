import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Approute } from './app.router';
import { RouterModule} from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogComponent } from './log/log.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    LogComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Approute)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
