import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ACMForm } from './acm_form.interface';
import { EntryService } from './entry.service';


import './rxjs-operators'


@Component({
  // moduleId: module.id,
  selector: 'my-entry',
  styleUrls: ['./entry.component.css'],
  templateUrl: './entry.component.pug',
  providers: [ EntryService ]

})
export class EntryComponent implements OnInit {
    public acmForm: FormGroup;
    public main_fields;
    private show_json: boolean;


    constructor(private _fb: FormBuilder, private _entry_service : EntryService) {
        this.main_fields = {};
    }




    ngOnInit() {
        // this.getFormData();
        // console.log(this.form_data[1]);
        this.show_json = true;
        this.acmForm = this._fb.group({
                form_name: [''],
                start_date: [''],
                start_time: [''],
                end_date: [''],
                end_time: [''],

                custom_fields: this._fb.array([
                    this.initField()
                ])
        });
        console.log(this.main_fields.length);
    }

    // initMainFields() {
    //     our_main_fields = this._fb.array([]);
    //     for (let field of this.main_fields) {
    //
    //     }
    // }

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

    getFormData() {
        this._entry_service.getForm().subscribe(
            data => {this.main_fields = data},
            err => console.error(err),
            () => console.log('done loading foods')
        );
    }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
