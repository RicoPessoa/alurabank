class Negociacao {
    constructor(data, quatidade, valor) {
        this._data = data;
        this._quatidade = quatidade;
        this._valor = valor;
    }
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
