import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestorRegistrationComponent } from './investor-registration/investor-registration.component';
import { CompleteInvestorRegistrationComponent } from './complete-investor-registration/complete-investor-registration.component';
import { InvestorPreferencesComponent } from './investor-preferences/investor-preferences.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestorRegistrationComponent,
    CompleteInvestorRegistrationComponent,
    InvestorPreferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,   
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
