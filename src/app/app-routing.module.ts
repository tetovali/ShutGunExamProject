import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { GivenPointsComponent } from './given-points/given-points.component';
import { ReceivedPointsComponent } from './received-points/received-points.component';
import { MessagesComponent } from './messages/messages.component';
import { TripsListComponent } from './trips-list/trips-list.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminGuard } from './admin/admin.guard';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PortalComponent } from './portal/portal.component';
import { FindALiftComponent } from './find-a-lift/find-a-lift.component';
import { RegisterATripComponent } from './register-a-trip/register-a-trip.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
    { path: 'login', component: LoginComponent, children: [
      { path: 'useradmin', component: UserAdminComponent, canActivate: [AdminGuard]},
    ]},
    { path: 'register', component: RegisterComponent},
  ]},
  
  { path: 'contact', component: ContactComponent},

  { path: 'adminportal', component: AdminPortalComponent, canActivate: [AdminGuard], children: [
    { path: 'adminsettings', component: AdminSettingsComponent},
    { path: 'adminprofile', component: AdminProfileComponent},
  ]},

  { path: 'portal', component: PortalComponent, canActivate: [AuthGuard], children: [
    { path: 'findalift', component: FindALiftComponent},
    { path: 'registeratrip', component: RegisterATripComponent},
    { path: 'userlist', component: UserListComponent, children: [
      { path: 'updateuser', component: UpdateUserComponent},
    ]},
    { path: 'profile', component: ProfileComponent, children: [
      { path: 'settings', component: SettingsComponent, children: [
        { path: 'receivedpoints', component: ReceivedPointsComponent},
        { path: 'givenpoints', component: GivenPointsComponent},
        { path: 'editprofile', component: EditProfileComponent},
      ]},
      { path: 'tripslist', component: TripsListComponent},
      { path: 'messages', component: MessagesComponent},
    ]},
  ]},
  

  { path: '**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
