# restapi-simple-node

_Rest Api Node.js simple con aws_

## Comenzando 🚀
_Estas instrucciones te permitirán obtener una copia del proyecto y desplegarlo en **vm-aws**._

### Pre-requisitos 📋

* [Instalar AWS CLI](#instalar-aws-cli)
* [Instalar Terraform](#instalar-terraform)
* [Instalar Git](#instalar-git)
* [Instalar NVM](#instalar-nvm)

### **Creación de VM en AWS**
***
_Clonar Proyecto_
```
$ mkdir proyectos
$ cd proyectos/
$ git clone <URL_GIT_PROYECTO>
$ cd <project_name>/
```
_Crear VM_
```
$ cd vm-aws/
$ terraform init
$ terraform apply
```
_Eliminar VM **(solo al finalzar)**_
```
$ terraform destroy
```
_Conectar por SSH a la VM_

```
$ cd vm-aws/
$ ssh ubuntu@<IP_PUBLICA_VM_AWS> -i <name-key-pair>.pem
```
_WARNING: UNPROTECTED PRIVATE KEY FILE!_
```
$ chmod 400 <name-key-pair>.pem
```
### **Desplegar en VM**
***
_[Instalar NVM](#instalar-nvm)_\
_Clonar Proyecto_
```
$ mkdir proyectos
$ cd proyectos/
$ git clone <URL_GIT_PROYECTO>
$ cd <project_name>/
```
_Desplegar_
```
$ npm install
$ npm start
```


### **Instalación de Pre-Requisitos**
***
* ### Instalar AWS CLI
```
$ cd Downloads/
$ curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

$ unzip awscliv2.zip
$ sudo ./aws/install --update
$ aws --version
```

* ### Instalar Terraform
```
$ curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -

$ sudo apt-add-repository "deb [arch=$(dpkg --print-architecture)] https://apt.releases.hashicorp.com $(lsb_release -cs) main"

$ sudo apt update
$ sudo apt install terraform
$ terraform --version
```

* ### Install Git
```
$ sudo apt update
$ sudo apt install git
$ git --version
```

* ### Instalar NVM
_NVM: Node Version Manager_
```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

$ source ~/.bashrc    (actualizar el servidor)
$ nvm --version

$ sudo apt update
$ nvm install --lts
$ node -v
$ npm -v
$ npx -v
```
