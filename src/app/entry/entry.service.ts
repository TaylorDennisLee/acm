// Observable Version
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class EntryService {

  constructor (private http: Http) {}

  getForm() {
      return this.http.get('/json/DSC_array.json').map((res:Response) => res.json()).catch(this.handleError);
  }




  // getForm (){
  //     console.log('in form!!');
  //     let this_res = this.http.get(this.formUrl).map(this.extractData).catch(this.handleError);
  //     console.log(this_res);
  //     console.log('out form!');
  //
  // }
  //
  // addHero (name: string): Observable<Hero> {
  //   let body = JSON.stringify({ name });
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //
  //   return this.http.post(this.heroesUrl, body, options)
  //                   .map(this.extractData)
  //                   .catch(this.handleError);
  // }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    console.log('here!!');
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

/*
  private heroesUrl = 'app/heroes.json'; // URL to JSON file
*/


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
