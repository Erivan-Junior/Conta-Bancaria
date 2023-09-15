class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputConta: HTMLInputElement;

    private ClientesRepository: Clientes;
    private ContasRepository: Contas;

    constructor() {
        this.inputNome =
            <HTMLInputElement>document.querySelector("#cliente_nome")
        this.inputCpf =
            <HTMLInputElement>document.querySelector("#cliente_cpf");
        this.inputConta =
            <HTMLInputElement>document.querySelector("#cliente_conta");
        this.ClientesRepository = new Clientes();
        this.ContasRepository = new Contas();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novoCliente = new Cliente(
                                    this.inputNome.value,
                                    this.inputCpf.value,
                                    new Conta(this.inputConta.value, 0));
        this.ClientesRepository.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    listar() {
        this.ClientesRepository.listar().forEach(
            cliente => this.inserirClienteNoHTML(cliente));
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo conta ' + cliente.toString());
                this.ContasRepository.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
