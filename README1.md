# # Explicación de la práctica.

Al tener las máquinas virtuales cerradas me ha sido bastante complicado levantar todo.

Muchos problemas para poder levantar la red, pero despues de investigar me doy cuenta que en el archivo .yaml de "quorum-test-network" se puede modificar la version de tessera-def (la cual me daba un error al desplegarla en local) para poner una version más antigua que permite la ejecución en local.

"fotos" --> tessera21

Una vez solventado, arrancamos la red con "docker-compose up -d" y vemos que se levanta correctamente.
Vemos en el "docker-compose.yml" que hay varios miembros y nodos hailitados.

"fotos" --> dockerDesktop / dockerPS

Inicio un proyecto hardhat en el repo de Besu y creo un pequeño smart contract de prueva llamado "SimpleSC". El siguiente paso es crear un script de despliegue a la red de quorum y modificar el archivo "hardhat.config.js" para que apunte al nodo que queremos y le decimos que wallet ejecuta la acción.

"fotos" --> "scriptDeploy" / "nodo"

A partir de aquí he tenido problemas. Tumbé la red para volver a la levantarla pero me decia que la versión que usaba estaba deprecada, lo cual no entiendo porque la primera vez que la levanté fué con la misma versión.


