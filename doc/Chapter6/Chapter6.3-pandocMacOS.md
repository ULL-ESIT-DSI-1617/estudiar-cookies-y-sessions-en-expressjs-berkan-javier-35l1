# [**Pandoc**](Chapter6-pandoc.md)
## **Intalación pandoc en MacOS**

### Mediante paquete de instalación 
* Descarga el paquete de instalación de [la página de descarga](https://github.com/jgm/pandoc/releases/tag/1.19.2.1).

* Es posible extraer los ejecutables **pandoc** y **pandoc-citerproc** del paquete que se ha descargado si prefieres no realizar la instalación ejecutando el instalador. Para hacer esto (para la versión 1.19.1 del paquete):
```bash 
mkdir pandoc-extract
cd pandoc-extract
xar -x ../pandoc-1.19.1-osx.pkg
cat pandoc.pkg/Payload | gunzip -dc | cpio -i
# executables are now in ./usr/bin/, man pages in ./usr/share/man
```

### Mediante **homebrew** 
* Ejecutamos el comando `brew install pandoc`. 
* Para generar documentos PDF es necesario instalar LaTeX. Como la instalación completa de [MacTeX](https://tug.org/mactex/) necesita mas de un gigabyte de espacio en disco, se recomienda installar [BasicTex](http://www.tug.org/mactex/morepackages.html) y usar la herramienta `tlmgr` para instalar los paquetes adicionales según se necesiten. Si aparecen avisos de errores sobre que no se ha encontrado la fuente para las letras, prueba el comando `tlmgr install collection-fontsrecommended`. 