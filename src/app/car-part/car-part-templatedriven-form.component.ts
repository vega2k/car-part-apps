import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {CarPart} from './car-part';

@Component({
    selector: 'app-car-part-templatedriven-form',
    templateUrl: 'car-part-templatedriven-form.component.html',
    styleUrls: ['car-parts.component.css']
})
export class CarPartTemplatedrivenFormComponent {

    constructor() { }

    onSubmit(form) {
        const formData = form.value as CarPart;
        // console.log(formData);
        alert(formData.id + ' ' + formData.name);
    }

}
