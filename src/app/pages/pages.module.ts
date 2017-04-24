import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeModule} from '../theme/theme.module';
import {routing} from './pages.routing';
import {PagesComponent} from './pages.component';
import {PageTopComponent} from '../theme/components/page-top/page-top.component';
import {SidebarComponent} from '../theme/components/sidebar/sidebar.component';
import {MenuComponent} from '../theme/components/menu/menu.component';

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        routing
    ],
    declarations: [
        PagesComponent,
        PageTopComponent,
        SidebarComponent,
        MenuComponent
    ]
})
export class PagesModule {
}
