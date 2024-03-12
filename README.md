
## Introducción


### Estructura del Programa
Para empezar a programar con este nuevo lenguaje, el codigo debe comenzar con la palabra "inicializacion" seguida de llaves que encierran el contenido del programa como se muestra aqui:

```javascript
inicializacion {

}
```

Dentro de estas llaves, se pueden definir y manipular variables de tres tipos: "ent" (entero), "dec" (decimal) y "ltr" (letra). Las variables pueden ser declaradas, asignadas con un valor inicial o incluso impresas en la consola.

Las instrucciones dentro del bloque de código deben estar separadas por un punto y coma al final de cada una.

```javascript
inicializacion {
    ent x;
    ltr l;
    dec y;
}
```

Para asignar valores a las variables, se utiliza la sintaxis: variable id = valor. Por ejemplo:

```javascript
inicializacion {
    ent x = 45;
    dec y = 12.5;
}
```
Si no se le asigna un valor al id, el llenguaje le asigna uno por defecto.

#### Operaciones Matematicas

Además de la asignación de variables, también se pueden realizar operaciones aritméticas y lógicas entre variables o valores. Por ejemplo:

```javascript
inicializacion {
    ent x = 10;
    ent y = 20;
    ent resultado = x + y * 2;
}
```

En este caso, se declara una variable resultado que se inicializa con el resultado de la expresión x + y * 2, que sería igual a 60.

### Impresión de Valores

El lenguaje también permite la impresión de valores en la consola utilizando la función resultado. Por ejemplo:

```javascript
inicializacion {
    ent x = 10;
    resultado(x);
}
```


### Manejo de errores

#### Errores del Lexer:

Estos errores ocurren cuando el lexer encuentra tokens inválidos en el código fuente. Pueden ocurrir debido a palabras clave desconocidas, caracteres no reconocidos o errores de sintaxis léxica.
Por ejemplo, si el lexer encuentra un símbolo que no está definido en la gramática, generará un error. Por ejemplo:

```javascript
inicializacion {
    ent  #x = 10;
    ent a = 5$ + 5;
}
```

#### Errores del Parser:

Estos errores ocurren cuando el parser no puede construir un árbol de sintaxis correctamente a partir de los tokens generados por el lexer. Pueden ocurrir debido a una estructura incorrecta en el código fuente que viola las reglas gramaticales definidas. Por ejemplo, si falta un punto y coma al final de una declaración o si se utiliza incorrectamente una palabra clave.

```javascript
inicializacion 
    ent x = 10;
    ent a = 5 + 5;
}
```
```javascript
inicializacion {
    ent x = 10
}
```

#### Errores durante la visita del árbol de sintaxis (CustomVisitor):

Estos errores ocurren durante la fase de análisis semántico, donde el árbol de sintaxis se procesa para realizar verificaciones adicionales o generar resultados. Pueden ocurrir debido a violaciones de reglas semánticas, como referencias a variables no declaradas, tipos incompatibles o errores en operaciones. Por ejemplo, si se intenta acceder a una variable que no ha sido declarada previamente.

Por ejemplo aqui como 'y' aun no a sido declarada saldra un error:

```javascript
inicializacion {
    ent z = 39;
    y = z + 10;
}
```




Despues de clonar se deberá hacer lo siguiente

1. npm install
2. npm install antlr4

Deberás asegurarte de que tu computadora tenga instalada la versión de ANTLR4 previamente.

-- Para compilar el archivo g4 utiliza el script

```
antlr -Dlanguage=JavaScript -o src/ ./grammar/Compilador.g4
```

Donde Compilador.g4 es el nombre de tu archivo.
