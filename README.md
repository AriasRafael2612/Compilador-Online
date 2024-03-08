# Introduccion

Para empezar a programar con este nuevo lenguaje, el codigo debe comenzar con la palabra "inicializacion" seguida de llaves que encierran el contenido del programa como se muestra aqui:

```
inicializacion {

}
```

Dentro de las llaves podremos comenzar a definir las siguientes variables "ent", "dec" "ltr", en la cual podremos comenzar a declararlas, asignarles un valor o imprimirlas.

Las instrucciones deben estar separadas por un punto y coma que se coloca al final de cada instrucción.

```javascript
inicializacion {
    ent x;
    ltr l;
    dec y;
}
```

Para asignarles un valor a la variables, la sintaxis es la siguiente: variable id = valor. Como se muestra aqui,:

```javascript
inicializacion {
    ent x = 45;
    ltr l = p;
    dec y = 12.5;
}
```

Las variables solo pueden aceptar ciertos terminos:

* 'ent' solo acepta numeros enteros por ejemplo: 1, 45, 12.
* 'ltr' solo acepta letras por ejemplo: a, b, k.
* 'dec' acepta tanto numeros enteros como numeros decimales, por ejemplo: 5, 1.12, 9, 655.99. 



Despues de clonar se deberá hacer lo siguiente

1. npm install
2. npm install antlr4

Deberás asegurarte de que tu computadora tenga instalada la versión de ANTLR4 previamente.

-- Para compilar el archivo g4 utiliza el script

```
antlr -Dlanguage=JavaScript -o src/ ./grammar/Compilador.g4
```

Donde Compilador.g4 es el nombre de tu archivo.
