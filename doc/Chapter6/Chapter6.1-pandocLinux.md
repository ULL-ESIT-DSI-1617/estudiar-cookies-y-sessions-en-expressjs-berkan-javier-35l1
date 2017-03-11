# [**Pandoc**](Chapter6-pandoc.md)
## Instalación de pandoc en Linux

### Mediante gestor de paquetes
* Puedes descargar pandoc a través del gestor de paquetes. Pandoc se encuentra en los repositorios de  Debian, Ubuntu, Slackware, Arch, Fedora, NiXOS, openSUSE y gentoo.
Hay que tener en cuenta que la versión del programa pandoc que está en dichos repositorios suele no ser la más reciente.

### Mediante debian package
* Si dispones de un sistema Debian y Ubuntu de 64-bit, puedes descargar el paquete debian que se encuentra en [github](https://github.com/jgm/pandoc/releases/tag/1.19.2.1).

* Una vez descargado el paquete debian(.deb) ejecuta el siguiente comando:
    ```bash
    sudo dpkg -i $DEB
    ```
    * Donde `$DEB` es la ruta donde está descargado el archivo .deb. Al ejecutar el comando se instalarán los ejecutables **pandoc** y **pandoc-citeproc** y las páginas de ayuda.
