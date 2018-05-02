import {Component} from '@angular/core';
import {Router} from "@angular/router";

import {CarPart} from "./car-part";
import {FormControl,  FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
    selector: 'car-part-form',
    templateUrl: 'car-part-form.component1.html',
    styleUrls: ['car-parts.component.css']
})
export class CarPartFormComponent {

    carPartForm:FormGroup;

    constructor(private _formBuilder:FormBuilder, private router:Router){
        this.carPartForm= _formBuilder.group({
            id: new FormControl('', Validators.required),
            name: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            price:new FormControl('', Validators.compose([Validators.required,
                                                           Validators.pattern('[0-9]')])),
            quantity:new FormControl('', Validators.required)
        });
    }

    onSubmit(f){
        console.log(f);
        // let formData = f.value as CarPart;
        // console.log(formData);
        // this.router.navigate(['/carpart']);
    }
}
