class Clientes {
    private _repository: Cliente [] = []

    constructor(){
    
    }

    inserir(cliente: Cliente) {
        this._repository.push(cliente)
    }

    remover(cpf: string) {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indice = this._repository.indexOf(clienteARemover);
            if (indice > -1) {
                this._repository.splice(indice, 1);
            }
        }
    }

    listar(): Cliente[]{
        return this._repository;
        }

    pesquisar(cpf: string): Cliente{
        return this._repository.find(
            cliente => cliente.cpf === cpf
        );
    }


    get repository(): Cliente[]{
        return this._repository;
    }
}