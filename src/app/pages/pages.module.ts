import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeModule} from '../theme/theme.module';
import {routing} from './pages.routing';
import {PagesComponent} from './pages.component';

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        routing
    ],
    declarations: [PagesComponent]
})
export class PagesModule {
}
