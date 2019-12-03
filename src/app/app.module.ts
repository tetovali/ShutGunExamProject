import { FilterUser } from './user-list/user-list.filter';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule}  from '@angular/material/input';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';
import { FindALiftComponent } from './find-a-lift/find-a-lift.component';
import { RegisterATripComponent } from './register-a-trip/register-a-trip.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { MatCardModule } from '@angular/material/card';
import { TripLiftComponent } from './trip-lift/trip-lift.component';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { AppState, rootReducer } from './redux/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { HttpClientModule } from '@angular/common/http';
import { FilterLift } from './find-a-lift/lift.filter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { TripsListComponent } from './trips-list/trips-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ReceivedPointsComponent } from './received-points/received-points.component';
import { GivenPointsComponent } from './given-points/given-points.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { MatIconModule}  from '@angular/material/icon';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    IndexComponent,
    ContactComponent,
    HomeComponent,
    PortalComponent,
    FindALiftComponent,
    RegisterATripComponent,
    UserAdminComponent,
    TripLiftComponent,
    FilterLift, FilterUser,
    ProfileComponent,
    SettingsComponent,
    TripsListComponent,
    MessagesComponent,
    ReceivedPointsComponent,
    GivenPointsComponent,
    EditProfileComponent,
    AdminSettingsComponent,
    AdminProfileComponent,
    AdminPortalComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, MatIconModule,
    MatDatepickerModule, MatCardModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatNativeDateModule,
    ReactiveFormsModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<AppState>,
              private devTool: DevToolsExtension,
              private ngReduxRouter: NgReduxRouter) {

              this.ngRedux.configureStore(rootReducer, {}, [],[ devTool.isEnabled() ? devTool.enhancer() : f => f]);

    ngReduxRouter.initialize(/* args */);
  }
 }
