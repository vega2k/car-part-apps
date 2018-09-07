import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarPartsComponent} from './car-parts.component';
import {CarPartReactiveFormComponent} from './car-part-reactive-form.component';
import {ReverseStrPipe} from '../shared/reverse-str.pipe';
import {UnderlineDirective} from '../shared/underline.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CarPartTemplatedrivenFormComponent} from './car-part-templatedriven-form.component';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [CarPartsComponent,
      CarPartReactiveFormComponent,
      CarPartTemplatedrivenFormComponent,
                  ReverseStrPipe,
                  UnderlineDirective],
    exports: [CarPartsComponent,
      CarPartReactiveFormComponent,
      CarPartTemplatedrivenFormComponent,
        ReverseStrPipe,
        UnderlineDirective]

})
export class CarPartModule {

}
