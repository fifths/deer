import {Injectable} from '@angular/core';

@Injectable()
export class PreloaderService {

    private loading: boolean = false;

    constructor() {
    }

    public show(): void {
        this.loading = true;
    }

    public hide(delay: number = 0): void {
        setTimeout(() => {
            this.loading = false;
            // console.log(this.loading);
        }, delay);
    }
}
