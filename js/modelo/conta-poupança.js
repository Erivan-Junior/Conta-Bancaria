class ContaPoupança extends Conta {
    constructor(numero, saldo, dataAniversario) {
        super(numero, saldo, dataAniversario);
    }

    render(meses) {
        this.creditar(saldo*(0.0067*meses))
    }

}
