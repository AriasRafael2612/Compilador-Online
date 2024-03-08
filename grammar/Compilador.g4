grammar Compilador;

start: INICIALIZACION LLAVE_I contenido LLAVE_F;

contenido: (declaracion | asignacion | imprimir)*;

declaracion: pr ID (ASIGNACION valor)? SEMI;

asignacion: ID ASIGNACION valor SEMI;

imprimir: PRINTF IPAREN valor DPARENT SEMI;

pr: ENT       #entero
  | LTR       #letra
  | DEC       #decimal
  ;
 
valor: valor op=('*'|'/') valor         #MulDiv
    | valor op=('+'|'-') valor          #AddSub
    | INT                               #int
    | FLOAT                             #float
    | CHAR                              #char
    | ID                                #id
    | '(' valor ')'                     #parens
    ;

ENT     : 'ent';
LTR     : 'ltr';
DEC     : 'dec';
PRINTF  : 'printf';

MUL : '*' ; // assigns token name to '*' used above in grammar
DIV : '/' ;
ADD : '+' ;
SUB : '-' ;

INICIALIZACION   : 'inicializacion';
ASIGNACION       : '=';
LLAVE_I     : '{' ;
LLAVE_F     : '}' ;
ID          : [a-zA-Z]+;
INT         : [0-9]+;
CHAR        : [a-zA-Z]+;
FLOAT       : [0-9]+'.'[0-9]+;
SEMI        : ';';
IPAREN      : '(';
DPARENT      : ')';


WS: [ \t\r\n]+ -> skip; // Ignorar espacios en blanco, tabulaciones, retornos de carro y saltos de línea.
