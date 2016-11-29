import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'customfield',
    styleUrls: ['field.component.css'],
    // templateUrl: 'field.component.html',
    template: require('./field.component.pug')
})
export class FieldComponent {
    @Input() public fieldnumber: number;
    @Input('group') public fieldForm: FormGroup;
    @Output() removeFField = new EventEmitter<number>();

    remove()
    {
        console.log("remove");
        console.log(this.fieldnumber);
        this.removeFField.emit(this.fieldnumber);
    }
}
