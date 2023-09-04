class ContaController {
    constructor() {
        this.repositorioContas = new RepositorioContas();
    }

    adicionarConta(conta) {
        this.repositorioContas.adicionar(conta);
    }

    listar() {
        this.repositorioContas.getContas().forEach(conta =>
            this.inserirContaNoHTML(conta)
        );
    }

    inserir(evento) {
        evento.preventDefault();
        const elementoNumero = document.querySelector('#numero');
        const elementoSaldo = document.querySelector('#saldo');
        const elementoDtNiver = document.querySelector('#dataAniversario');
        const elementoTipoConta = document.querySelector('#tipoConta')

        switch (elementoTipoConta.value) {
            case 'bonificada': 
                const bonificada = new ContaBonificada(elementoNumero.value, 
                                            Number(elementoSaldo.value));
                this.repositorioContas.adicionar(bonificada);
                this.inserirContaNoHTML(bonificada, 'Bonificada');
                break;
            case 'corrente':
                const corrente = new Conta(elementoNumero.value, 
                                            Number(elementoSaldo.value));
                this.repositorioContas.adicionar(corrente);
                this.inserirContaNoHTML(corrente, 'Corrente');
                break;
            case 'poupança':
                const poupança = new ContaPoupança(elementoNumero.value, 
                                            Number(elementoSaldo.value),
                                            elementoDtNiver.value);
                const dtniver = new Date(elementoDtNiver.value);
                const QtdMeses = new Date().getMonth() - dtniver.getMonth();
                if(QtdMeses > 0)
                    poupança.render(QtdMeses)
                this.repositorioContas.adicionar(poupança);
                this.inserirContaNoHTML(poupança, 'Poupança');
                break;
            default: console.log("tipo desconhecido de conta!")
                break;
        }
        
    }

    inserirContaNoHTML(conta, tipo) {
        const elementoP = document.createElement('p');
        elementoP.textContent = '[Conta ' + tipo + '] - ' + conta.numero + ': ' + conta.saldo;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click', (event) => {
            this.repositorioContas.remover(conta.numero);
            event.target.parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
