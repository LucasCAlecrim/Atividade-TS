"use strict";
class funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    obterSalarioAnual() {
        console.log(`Salario mensal: ${this.salario.toFixed(2)}, Salario anual: ${(this.salario * 12).toFixed(2)}`);
    }
}
//gerente herdando de funcionario e adicionando "SUPER" (Herda nome e salario)
class gerente extends funcionario {
    constructor(nome, salario, bonus) {
        super(nome, salario);
        this.bonus = bonus;
    }
    obterSalarioAnual() {
        //adiciona o calculo para colocar no metodo
        const salarioAnualComBonus = (this.salario + this.bonus) * 12;
        console.log(`Salário mensal: R$ ${this.salario.toFixed(2)}, Salário anual com bônus: R$ ${salarioAnualComBonus.toFixed(2)}, Bônus anual: R$ ${(this.bonus * 12).toFixed(2)}`);
    }
}
//Criando funcionario e chamado o metodo
const funcionario1 = new funcionario("Joaozinho", 2500);
funcionario1.obterSalarioAnual();
//Criando gerente e chamando o metodo sobreescrito 
const gerente1 = new gerente("Sarah", 5500, 500);
gerente1.obterSalarioAnual();
