import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { WrapperModule } from './authenticated/wrapper/wrapper.module';
import { HomeModule } from './authenticated/wrapper/home/home.module';
import { ItemsModule } from './authenticated/wrapper/items/items.module';
import { MouvementsModule } from './authenticated/wrapper/mouvements/mouvements.module';
import { SettingsModule } from './authenticated/wrapper/settings/settings.module';
import { SummaryModule } from './authenticated/wrapper/summary/summary.module';
import { UsersModule } from './authenticated/wrapper/users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    WrapperModule,
    HomeModule,
    MouvementsModule,
    SettingsModule,
    SummaryModule,
    UsersModule,
    GraphQLModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
