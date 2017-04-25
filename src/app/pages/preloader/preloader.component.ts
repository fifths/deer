import {Component, OnInit} from '@angular/core';
import {PreloaderService} from '../../theme/service/preloader.service';

@Component({
    selector: 'app-preloader',
    templateUrl: './preloader.component.html',
    styleUrls: ['./preloader.component.scss'],
    providers: [PreloaderService],
})
export class PreloaderComponent implements OnInit {

    constructor(private preloaderService: PreloaderService) {
        preloaderService.show();
        preloaderService.hide(5000);
    }

    ngOnInit() {
    }

}
