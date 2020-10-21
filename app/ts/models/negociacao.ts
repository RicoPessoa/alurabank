class Negociacao {

    constructor(private _data: Date, private _quatidade: number, private _valor: number) {}

    get data() {
        return this._data;
    }

    get quatidade() {
        return this._quatidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quatidade * this._valor;
    }
}