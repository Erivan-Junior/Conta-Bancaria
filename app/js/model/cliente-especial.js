class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
    }
    get dependentes() {
        return this._dependentes;
    }
}
