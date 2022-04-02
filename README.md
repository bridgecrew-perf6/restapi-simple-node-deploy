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
$ cd vm-aws/
```

_Conectarse a AWS_
* Crear y descargar un **access-key** (*.csv) desde [security-credential](https://us-east-1.console.aws.amazon.com/iam/home?region=us-east-1#/security_credentials) (verificar región)
* Crear **terraform.tfvars** con (*.csv):
```
# AWS Settings
aws_access_key = "AKIAxxxxxxxxx"
aws_secret_key = "xxxxxxxxxxxxx"
aws_region     = "eu-west-1"
```

_Crear VM_
```
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
_Verificar_ \
`http://<IP_PUBLICA_VM_AWS>:3000/`
`https://<IP_PUBLICA_VM_AWS>:3000/`

### **Instalación de Pre-Requisitos**
***
* ### Instalar AWS CLI
```
$ sudo apt-get update
$ cd Downloads/
$ curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

$ unzip awscliv2.zip
$ sudo ./aws/install --update
$ aws --version
```

* ### Instalar Terraform
```
$ sudo apt-get update
$ curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -

$ sudo apt-add-repository "deb [arch=$(dpkg --print-architecture)] https://apt.releases.hashicorp.com $(lsb_release -cs) main"

$ sudo apt install terraform
$ terraform --version
```

* ### Install Git
```
$ sudo apt-get update
$ sudo apt install git
$ git --version
```

* ### Instalar NVM
_NVM: Node Version Manager_
```
$ sudo apt-get update
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

$ source ~/.bashrc    (actualiza el servidor)
$ nvm --version

$ nvm install --lts
$ node -v
$ npm -v
$ npx -v
```
