# JS Blockchain

### Participantes: [Igor Deo Alves](https://github.com/IgorDeo), [André Reliquias](https://github.com/AndreReliquias), [Messias Olimpio](https://github.com/Messiviski)
---
Este projeto foi desenvolvido dentro do programa de formação de 2021 da **Investtools**. O intuito era criar um visualizador de blockchain em vanilla JS(brach: master-vanilla) e depois "traduzir" para React(brach: master-react). 

O site se consiste em um formulário, onde é possível escrever os dados e definir a dificuldade(1) do bloco. Aṕos preencher o formulário e clicar no botão "New Block". O bloco é minerado(2) e então adicionado a lista dos blocos.
Na listagem dos blocos existem os campos "Index", "Data", "Previous Hash", "Hash" e "Nonce"(3) .

---

1. Quantidade de zeros que uma hash tem que ter como prefixo para ser considerada válida. 
2. Processo de geração de hash's diferentes a partir de um valor incremental(Nonce), a fim de encontrar uma hash válida. 
3. Valor que varia durante o processo de mineração, para se encontrar uma hash válida.



