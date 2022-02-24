const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

const porta = 3000 
conexao.connect(erro => {
    if(erro) {
        console.log(erro);
    } else {
        console.log('Banco de dados conectado');

        Tabelas.init(conexao);

        const app = customExpress();
        
        app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`)); 
    };
});
 

