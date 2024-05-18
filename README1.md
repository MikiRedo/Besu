Explicación de la práctica.

Muchos problemas para poder levantar la red, pero despues de investigar me doy cuenta que en el archivo .yaml de "quorum-test-network" se puede modificar la version de tessera-def para poner una version más antigua que permite la ejecución en local.

"fotos" --> tessera21

Una vez solventado, arrancamos la red con "docker-compose up -d" y vemos que se levanta correctamente.

"fotos" --> dockerDesktop / dockerPS

Inicio un proyecto hardhat en el repo de Besu y creo un pequeño smart contract llamado "SimpleSC". El siguiente paso es crear un script de despliegue a la red de quorum y modificar el archivo "hardhat.config.js" para que apunte al nodo que queremos.

"fotos" --> "scriptDeploy"


