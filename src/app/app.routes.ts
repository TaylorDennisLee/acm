import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent }   from './home/home.component';
import { EntryComponent }   from './entry/entry.component';
import { SearchComponent }      from './search/search.component';
import { TableComponent }  from './table/table.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'entry',  component: EntryComponent },
  { path: 'search', component: SearchComponent },
  { path: 'table',     component: TableComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
