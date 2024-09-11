"use strict";
class carro {
    //construtor
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    //função para mostrar as informações
    obterDetalhe() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
    //função para comparar o ano de fabricação com o atual
    obterIdade() {
        console.log(`Ano de fabricação: ${this.ano}, Ano atual: 2024`);
    }
}
//criando instância da classe carro
const carro1 = new carro("Renout", "Kwid", 2021);
//Obtendo a informação da nova instancia 
carro1.obterDetalhe();
carro1.obterIdade();
