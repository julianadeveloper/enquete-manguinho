
<h2>Configuração do HUSK E LINT STAGED</h2>


# Configuração do HUSK:

Podemos usar para criar hooks para processos antes de subir as alterações.
Exemplos:
Pré-commit: Validar um padrão de commit.

# Lint Staged - Utilizar essa lib com o HUSK:

Permite que rode scripts somente em arquivos na staged-area (arquivos que entrarão para o próximo commit, ou seja, não foram comitados);




<h2>Configuração JEST</h2>


# Instalação do Jest:

npm i -D jest @types/jest ts-jest

- Instalação do jest

- @types/jest:
Types para usar a lib de tipagem do 
typescript


- ts-jest: Lib para compilar código ts para js somente no jest.

# Necessário rodar o jest --init para criar o arquivo de configuração do jest.

Caso ocorra o erro de comando não encontrado, uma maneira de resolver o erro é usar o comando "npx".

npx jest --version ou npx jest --init

Caso ocorra erro para configuração do lint :
https://stackoverflow.com/questions/72792450/how-do-i-disable-tslint-rule-this-rule-requires-the-strictnullchecks-compiler