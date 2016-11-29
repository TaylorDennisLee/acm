import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { CustomFieldComponent } from './custom_field.component'
import { ACMForm } from './acm_form.interface';


@Component({
  // moduleId: module.id,
  selector: 'my-entry',
  // styleUrls: ['.entry.component.css'],
  templateUrl: './entry.component.pug',
  // template: require('./entry.component.pug')
  // template:`
  // <p>Table Boo</p>
  // `
})
export class EntryComponent implements OnInit {
    public acmForm: FormGroup;


    constructor(private _fb: FormBuilder) { }




    ngOnInit() {
        this.acmForm = this._fb.group({
                form_name: ['', [Validators.required, Validators.minLength(5)]],
                custom_fields: this._fb.array([
                    this.initField()
                ])
        });
    }

    initField() {
        return this._fb.group({
            field_number:[''],
            field_name:[''],
            field_value:['']
        })
    }

    addField() {
        const control = <FormArray>this.acmForm.controls['custom_fields'];
        control.push(this.initField());
    }

    removeField(i: number) {
        const control = <FormArray>this.acmForm.controls['custom_fields'];
        control.removeAt(i-1);
    }

    save() {
        console.log('model');
    }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
