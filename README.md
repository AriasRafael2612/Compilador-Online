
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

Además de la asignación de variables, también se pueden realizar operaciones aritméticas y lógicas entre variables o valores. Por ejemplo:

```javascript
inicializacion {
    ent x = 10;
    ent y = 20;
    ent resultado = x + y * 2;
}
```

En este caso, se declara una variable resultado que se inicializa con el resultado de la expresión x + y * 2, que sería igual a 60.

El lenguaje también permite la impresión de valores en la consola utilizando la función printf. Por ejemplo:

```javascript
inicializacion {
    ent x = 10;
    printf(x);
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
