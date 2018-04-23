import { MnMapglModule } from './libs/mn-mapgl/mn-mapgl.module';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PageMapsComponent } from './page-maps/page-maps.component';
import { PageMapComponent } from './page-map/page-map.component';
import { PageItemComponent } from './page-item/page-item.component';

import { RouterModule, Routes } from '@angular/router';
import { PortalModule } from '@angular/cdk/portal';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatToolbarModule } from '@angular/material';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { PageIntroComponent } from './page-intro/page-intro.component';
import { PageUserComponent } from './page-user/page-user.component';
import { PageUsersComponent } from './page-users/page-users.component';
import { CityosService } from './cityos.service';
import { MnSlideDirective, MnSlideshowComponent } from './libs/mn-slideshow/mn-slideshow.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';


const appRoutes: Routes = [
  { path: '', component: PageIntroComponent },
  { path: 'maps', component: PageMapsComponent },
  { path: 'maps/:map', component: PageMapComponent },
  { path: 'maps/:map/:item', component: PageItemComponent },
  { path: 'users', component: PageUsersComponent },
  { path: 'users/:user', component: PageUserComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    PageMapsComponent,
    PageMapComponent,
    PageItemComponent,
    PageIntroComponent,
    PageUserComponent,
    PageUsersComponent,
    MnSlideshowComponent,
    MnSlideDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PortalModule,
    FlexLayoutModule,
    InfiniteScrollModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgxMapboxGLModule.forRoot({
      accessToken: 'pk.eyJ1Ijoic2lybW1vIiwiYSI6ImNqZms4dnA3bDAzcDUzMnJxaWw3dHhicHIifQ.IwBKIHYlAS3GP0GleYKxTw',
    }),
    AngularFireDatabaseModule,
    MatGridListModule, MatCheckboxModule, MatButtonModule, MatToolbarModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    MnMapglModule
  ],
  providers: [AngularFireDatabase, CityosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
