# [**Pandoc**](Chapter6-pandoc.md)
## **Instalación en Windows**

### Mediante paquete de instalación 

* Descarga el instalador de la [página de descarga de pandoc](https://github.com/jgm/pandoc/releases/tag/1.19.2.1). 

* Para generar la salida en PDF, también necesitaras instalar **LaTeX**. Se recomienda instalar [MiKTeX](https://miktex.org/).

### Mediante la extracción de los ejecutables
* Extrae los ejecutables del paquete de instalación y copialos directamente a cualquier directorio, sin ejecutar el instalador. 
* Ejemplo de como extraer y copiar los ejecutables: 
```bash 
mkdir "%TEMP%\pandoc\"
start /wait msiexec.exe /a pandoc-1.19.1-windows.msi /qn targetdir="%TEMP%\pandoc\"
copy /y "%TEMP%\pandoc\pandoc.exe" C:\Utils\Console\
copy /y "%TEMP%\pandoc\pandoc-citeproc.exe" C:\Utils\Console\
rmdir /s /q "%TEMP%\pandoc\"
```

