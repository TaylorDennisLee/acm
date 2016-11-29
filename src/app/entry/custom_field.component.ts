import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    // moduleId: module.id,
    selector: 'customfield',
    styleUrls: ['./custom_field.component.css'],
    templateUrl: './custom_field.component.pug',
    // template: require('./custom_field.component.pug')
})
export class CustomFieldComponent implements OnInit {

    private stage_switch: boolean;
    private fieldname: string;
    private _fieldnumber: number;
    // @Input('fieldnumber') public fieldnumber: number;
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
