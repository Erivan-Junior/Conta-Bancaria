class ClienteController {
    constructor() {
        this.inputNome =
            document.querySelector("#cliente_nome");
        this.inputCpf =
            document.querySelector("#cliente_cpf");
        this.inputConta =
            document.querySelector("#cliente_conta");
        this.ClientesRepository = new Clientes();
        this.ContasRepository = new Contas();
    }
    inserir(evento) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, new Conta(this.inputConta.value, 0));
        this.ClientesRepository.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }
    listar() {
        this.ClientesRepository.listar().forEach(cliente => this.inserirClienteNoHTML(cliente));
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo conta ' + cliente.toString());
            this.ContasRepository.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
