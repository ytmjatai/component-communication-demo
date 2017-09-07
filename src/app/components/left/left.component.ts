import { Component } from '@angular/core';

import { CommunicateService } from './../../services/communicate.service';

@Component({
    moduleId: module.id,
    selector: 'left',
    templateUrl: './left.component.html',
    styleUrls: ['./left.component.css']
})

export class LeftComponent {


    constructor(
        private comService: CommunicateService
    ) { }


    sub() {
        this.comService.fireModelChange();
    }
}