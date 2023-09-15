class ClienteEspecial extends Cliente {
    private _dependentes: Clientes;

    constructor(nome: string, cpf: string, conta: Conta) {
        super(nome, cpf, conta)
    }

    get dependentes(): Clientes {
        return this._dependentes;
    }
}