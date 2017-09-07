import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CommunicateService {

    private _model: Model;

    get model(): Model {
        return this._model;
    }

    modelChange: EventEmitter<Model>;

    constructor() {
        this._model = new Model();
        this._model.id = null;
        this._model.name = null;
        this._model.age = null;
        this.modelChange = new EventEmitter<Model>(true);
    }

    fireModelChange() {
        this.modelChange.next(this.model);
    }

}
export class Model {
    id?: number;
    name?: string;
    age?: number;
}
