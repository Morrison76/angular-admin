import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { DashboardComponent } from './features/dashboard/components/dashboard/dashboard.component';
import { SettingsComponent } from './features/settings/components/settings/settings.component';
import { UsersComponent } from './features/users/users/users.component';



@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
