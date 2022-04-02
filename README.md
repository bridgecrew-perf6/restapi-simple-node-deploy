# restapi-simple-node

<!-- no editar la tabla -->
## **Tabla de Contenidos**
  - [**Intro**](#intro)
  - [**Pre-requisitos**](#pre-requisitos)
    - [Instalar Git](#instalar-git)
    - [Instalar NVM](#instalar-nvm)
    - [Instalar Docker](#instalar-docker)
    - [Instalar AWS CLI](#instalar-aws-cli)
    - [Instalar Terraform](#instalar-terraform)
  - [**Desplegar en Local**](#desplegar-en-local)
  - [**Desplegar en Docker**](#desplegar-en-docker)
  - [**Desplegar en AWS**](#desplegar-en-aws)
  - [**Comandos Git**](#comandos-git)
    - [Iniciar Proyecto](#iniciar-proyecto)
    - [Clonar Proyecto](#clonar-proyecto)
    - [Verficar Estado](#verficar-estado)
    - [Revisar Log](#revisar-log)


****
## **Intro**
_Este es un ejemplo para desplegar un proyecto simple de Rest Api (Node.js) en un entorno Linux con diferentes VMs_

***
## **Pre-requisitos**
### Instalar Git 
[Link](https://github.com/git-guides/install-git#debianubuntu)
```
$ sudo apt-get update
$ sudo apt install git
$ git --version
```

### Instalar NVM
_NVM: Node Version Manager_\
[Link](https://github.com/nvm-sh/nvm#installing-and-updating)
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

### Instalar Docker
* _Docker_\
[Link Docker](https://docs.docker.com/engine/install/ubuntu/)
  * Set up the repository
  ```
  $ sudo apt-get remove docker docker-engine docker.io containerd runc
  $ sudo apt-get update

  $ sudo apt-get install ca-certificates curl gnupg lsb-release

  $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

  $ echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  ```
  * Install Docker Engine
  ```
  $ sudo apt-get update
  $ sudo apt-get install docker-ce docker-ce-cli containerd.io
  $ docker -v
  ```
  * Docker daemon socket ⚠️
  ```
  sudo chmod 666 /var/run/docker.sock
  ```

* _Docker Compose_\
[Link Docker Compose](https://docs.docker.com/compose/install/)
  ```
  $ sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

  $ sudo chmod +x /usr/local/bin/docker-compose
  $ docker-compose --version
  ```

### Instalar AWS CLI
[Link](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
```
$ sudo apt-get update
$ cd Downloads/
$ curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

$ unzip awscliv2.zip
$ sudo ./aws/install --update
$ aws --version
```

### Instalar Terraform
[Link](https://www.terraform.io/cli/install/apt)
```
$ sudo apt-get update
$ curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -

$ sudo apt-add-repository "deb [arch=$(dpkg --print-architecture)] https://apt.releases.hashicorp.com $(lsb_release -cs) main"

$ sudo apt install terraform
$ terraform --version
```

****
## **Desplegar en Local**
_[Instalar NVM](#instalar-nvm)_\
_[Clonar Proyecto](#clonar-proyecto)_\
_Desplegar_
```
$ npm install
$ npm start
```
_Verificar_ \
`http://<IP_PUBLICA_VM>:3000/`

****
## **Desplegar en Docker**
* Utilizando **Dockerfile**\
  _Ejecutar_
  ```
  $ docker build -t IMAGE_NAME .
  $ docker images
  $ docker run -d -p 3000:3000 IMAGE_NAME
  ```
  _Revisar Container_
  ```
  $ docker ps -a
  $ docker exec -it CONTAINER_ID /bin/bash
  ```
  _Verificar_ \
  `http://<IP_PUBLICA_VM>:3000/`

  _Eliminar_  ⚠️
  ```
  $ docker stop CONTAINER_ID
  $ docker rm CONTAINER_ID
  $ docker rmi IMAGE_NAME
  ```
* Utilizando **Docker Compose**\
  _Ejecutar_
  ```
  $ docker-compose -f <FILENAME.yml> up -d
  $ docker-compose ps -a
  ```
  _Verificar_ \
  `http://<IP_PUBLICA_VM>:3000/`

  _Detener_
  ```
  $ docker-compose -f <FILENAME.yml> stop
  ```
  _Eliminar_ ⚠️
    ```
  $ docker-compose -f <FILENAME.yml> down
  ```

****
## **Desplegar en AWS**
_[Clonar Proyecto](#clonar-proyecto)_\
_Ir a la carpeta_
```
$ cd vm-aws/
```

_Configurar conexión con AWS_
* Crear y descargar un **access-key** (*.csv) desde [security-credential](https://us-east-1.console.aws.amazon.com/iam/home?region=us-east-1#/security_credentials) (verificar región)
* Crear **terraform.tfvars** con (*.csv):
    ```
    # AWS Settings
    aws_access_key = "AKIAxxxxxxxxx"
    aws_secret_key = "xxxxxxxxxxxxx"
    aws_region     = "eu-west-1"
    ```

* Eliminar **access-key** de [security-credential](https://us-east-1.console.aws.amazon.com/iam/home?region=us-east-1#/security_credentials)  ⚠️

_Crear VM_
```
$ terraform init
$ terraform apply
```
_Eliminar VM_ ⚠️
```
$ terraform destroy
```
_Conectar por SSH a la VM_
```
$ cd vm-aws/
$ ssh ubuntu@<IP_PUBLICA_VM_AWS> -i <name-key-pair>.pem
```
_WARNING: UNPROTECTED PRIVATE KEY FILE!_ ⚠️
```
$ chmod 400 <name-key-pair>.pem
```
_Desplegar proyecto_
* Utilizar los comandos de [**Desplegar en Local**](#desplegar-localmente)


****
## **Comandos Git**
### Iniciar Proyecto
```
echo "# restapi-simple-node" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <URL_GIT_PROYECTO>
git push -u origin main
```
### Clonar Proyecto
```
$ mkdir proyectos
$ cd proyectos/
$ git clone <URL_GIT_PROYECTO>
$ cd <project_name>/
```
### Verficar Estado
```
$ git status
```
### Revisar Log
```
$ git log
```
