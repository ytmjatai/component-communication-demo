import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from "rxjs/Subject";
import { CommunicateService, Model } from './../../services/communicate.service';

@Component({
    moduleId: module.id,
    selector: 'right',
    templateUrl: './right.component.html',
    styleUrls: ['./right.component.css']
})

export class RightComponent implements OnInit, OnDestroy {

    private comSubject: Subject<Model>;

    id: number;
    name: string;
    age: number;

    constructor(
        private comService: CommunicateService
    ) { }

    ngOnInit() {
        this.comSubject = this.comService.modelChange.subscribe(
            () => this.doSomething()
        )
    }

    ngOnDestroy() {
        this.comSubject.unsubscribe();
    }

    doSomething() {
        this.id = Number(this.comService.model.id) + 10;
        this.name = this.comService.model.name;
        this.age = Number(this.comService.model.age) + 5;
    }

}