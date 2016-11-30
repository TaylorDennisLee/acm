import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// import { NgSemanticModule } from 'ng-semantic';

import { AppRoutingModule } from './app.routes';


import { AppComponent } from './app.component';

import { HomeComponent  }       from './home/home.component';

import { EntryComponent }       from './entry/entry.component';
import { CustomFieldComponent } from './entry/custom_field.component';


import { SearchComponent}       from './search/search.component';
import { TableComponent }       from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntryComponent,
    SearchComponent,
    TableComponent,
    CustomFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    // NgSemanticModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
