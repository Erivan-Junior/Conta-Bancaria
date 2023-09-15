let contaController = new ClienteController();
const conta1 = new Conta('1', 100);
const cliente1 = new Cliente('Liz', '11111111111', conta1);
const repositorio = new Clientes();
console.log("inserindo");
repositorio.inserir(cliente1);
console.log("listando");
console.log(repositorio.listar());
console.log("pesquisando");
console.log(repositorio.pesquisar('11111111111'));
// inserindo no html
repositorio.repository.forEach(element => contaController.inserirClienteNoHTML(element));
console.log("deletando");
repositorio.remover('11111111111');
console.log("fim");
console.log(repositorio.listar());
