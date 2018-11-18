import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './module/app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {PostRegisterListComponent} from './post-register-list/post-register-list.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppMaterialModule} from "./module/app-material.module";
import {PostRegisterCrudService} from "./service/post-register-crud.service";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {PostRegisterComponent} from './post-register/post-register.component';
import {FormsModule} from "@angular/forms";
import {PostRegisterCreationDialogComponent} from './new-post-dialog/post-register-creation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PostRegisterListComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
    PostRegisterComponent,
    PostRegisterCreationDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [
    PostRegisterCrudService
  ],
  entryComponents: [
    PostRegisterCreationDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
