import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {
  // Component,
  // Input,
  trigger,
  state,
  style,
  animate,
  transition,
  group
} from '@angular/core';

@Component({
    // moduleId: module.id,
    selector: 'customfield',
    styleUrls: ['./custom_field.component.css'],
    templateUrl: './custom_field.component.pug',
    // template: require('./custom_field.component.pug')
    animations: [
                trigger('flyInOut', [
          state('in', style({transform: 'translateY(0)'})),
          transition('void => *', [
            style({transform: 'translateY(-100%)'}),
            animate(400)
          ]),
          transition('* => void', [
            animate(400, style({transform: 'translateY(100%)'}))
          ])
        ])


    ]
})
export class CustomFieldComponent implements OnInit {

    private stage_switch: boolean;
    private fieldname: string;
    private fn: string;
    private _fieldnumber: number;
    // @Input('fieldnumber') public fieldnumber: number;

    public toggles = [
    { value: 'toggled', display: 'Toggled' },
    { value: 'untoggled', display: 'UnToggled' },
    ];
    @Input('group') public fieldForm: FormGroup;
    @Output() removeFField = new EventEmitter<number>();

    @Input()
    set fieldnumber(fieldnumber: number)
    {
        this._fieldnumber = fieldnumber;
        this.fieldForm.controls['field_number'].setValue(fieldnumber);
    }
    get fieldnumber()
    {
        return this._fieldnumber;
    }


    ngOnInit()
    {
        this.stage_switch = false;
        this.fieldname = '';
    }


    nextStage()
    {
        this.stage_switch = true;
        console.log(this.fieldname);
    }

    backStage()
    {
        this.stage_switch = false;
    }



    remove()
    {
        console.log("remove");
        console.log(this.fieldnumber);
        this.removeFField.emit(this.fieldnumber);
    }
}
