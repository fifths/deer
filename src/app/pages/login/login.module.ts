import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {routing} from './login.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        routing
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
