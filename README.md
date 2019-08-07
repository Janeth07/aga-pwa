# Diseño, Desarrollo e Implemntación de una PWA en Angular 7

_La PWA será un producto que trabajará en un entorno empresarial, fungirá como complemento de la pesa y la Aplicación Móvil. La PWA sera utilizada para la gestión de ganado, sus dietas, sus pesos, su histórico, así como la administración de usuarios involucrados en el proceso como lo son ganadero y administrador de la plataforma._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_El equipo en el que se supone que se va a descargar el proyecto deberá  tener acceso al reposotorio,instalar NodeJs y un editor de código._


### Instalación 🔧

_Para descargar el repositorio remoto deberás realizar un fork al siguinete proyecto de GitHub [aga-pwa](https://github.com/olara1989/aga-pwa)_

_Despues tendrás que ejecutar el siguiente comando desde la terminal para poder descargar el repositorio de manera local._

```
git clone 
```

_Con el siguinte comando vinculas el proyecto local con tu respositorio remoto._

```
git remote
```

_Una vez descargado el proyecto deberás instalar las actualizaciones de las dependencias con el comando:_

```
npm install
```

_Por último corres tu proyecto para que se visualice en el navegador._

```
ng serve --open
```

## Deployment 📦

_Para crear una llave SSH utilizamos el siguinete comando:_

```
ssh-keygen
```
_Entras al archivo SSH_

```
cd .ssh
```

_Ingresas al archivo id_rsa.pub_

```
cd id_rsa.pub
```

_En tu cuenta de GitHub creas una nueva SSH Keys, en la cual pondrás un título y pegarás los carácteres que obtuviste al ingresar al archivo anterior._

_Tandrás que establecer tu conexión remota con la URL de SSH._

```
git remote add origin
```

_Ahora ya pudes subir todos tus cambios al respositorio que tienes en GitHub, sin la necesidad de ingresar tu usuario y contraseña cada vez que subas cambios nuevos._

## Construido con 🛠️

_Las herramientas que se utilizaron para crear el proyecto son:_

* [Angular 7](https://angular.io/) - Es una paltaforma que facilita la creación de aplicaciones con la Web
* [NodeJs](https://nodejs.org/es/) - Es una Libreria
* [Firebase](https://firebase.google.com/) - Plataforma en la nube que ofrece un conjunto de servicios
* [Bootstrap](https://getbootstrap.com/) - Herramientas de código abierto para desarrollar con HTML, CSS y JS
* [Material Desing](https://material.io/design/) - Lenguaje visual para el diseño


## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en el  [Manual de Usuario](https://drive.google.com/file/d/161sZdta1hEIwfGWaf3hafEkN7FM-TpFH/view?usp=sharing)


## Autores ✒️

_Las personas involucradas en la creacion del proyecto fueron:_

* **Omar Emmanuel Lara Juárez** - *Líder del Proyecto, Diseñador y Programador* - [olara1989](https://github.com/olara1989)
* **Adriana Lizeht Guardado Reyes** - *Programador* - [lizeht](https://github.com/lizeht)
* **Alma Janeth Ibarra Palafox** - *Programador* - [Janeth07](https://github.com/Janeth07)
