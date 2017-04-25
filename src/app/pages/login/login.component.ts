import {Component, Inject, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    @Input()
    public alerts: IAlert [];

    constructor(@Inject(FormBuilder) fb: FormBuilder) {
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });
    }

    ngOnInit() {
    }

    signIn() {
        console.log(this.form.controls['email'].value);
        console.log(this.form.controls['password'].value);

        if (this.form.valid) {
            // to do;
            this.alerts = [{
                id: 1,
                type: 'success',
                dismissible: true,
                message: 'This is an success alert',
            }];
        } else {
            this.alerts = [{
                id: 1,
                type: 'danger',
                dismissible: true,
                message: JSON.stringify(this.form.value) + 'Status:' + this.form.status,
            }];
        }
    }

    closeAlert(alert: IAlert) {
        this.alerts.splice(0, 1);
    }
}

export interface IAlert {
    id: number;
    dismissible: boolean;
    type: string;
    message: string;
}
