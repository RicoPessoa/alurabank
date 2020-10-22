class Negociacoes {

    private _negociacoes: Negociacao[] = []; 
    quantidade: number;
    valor: number;
    volume: number;
    data: Date;

    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacoes[] {

        return [].concat(this._negociacoes);
    }
}