class Clientes {
    constructor() {
        this._repository = [];
    }
    inserir(cliente) {
        this._repository.push(cliente);
    }
    remover(cpf) {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indice = this._repository.indexOf(clienteARemover);
            if (indice > -1) {
                this._repository.splice(indice, 1);
            }
        }
    }
    listar() {
        return this._repository;
    }
    pesquisar(cpf) {
        return this._repository.find(cliente => cliente.cpf === cpf);
    }
    get repository() {
        return this._repository;
    }
}
