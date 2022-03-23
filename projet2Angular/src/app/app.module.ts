import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WorningAlertComponent } from './worning-alert/worning-alert.component';
import { SuccessAlerComponent } from './success-aler/success-aler.component';
import { FormsModule } from '@angular/forms';
import { ExampleComponent } from './example/example.component';
import { Example2Component } from './example2/example2.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WorningAlertComponent,
    SuccessAlerComponent,
    ExampleComponent,
    Example2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
