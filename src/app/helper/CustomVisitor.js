// Importa las clases CompiladorVisitor y CompiladorParser
import CompiladorVisitor from "../../CompiladorVisitor";
import CompiladorParser from "../../CompiladorParser";

// Define la clase CustomVisitor que extiende de CompiladorVisitor
export default class CustomVisitor extends CompiladorVisitor {
    constructor() {
        super();
        this.memory = new Map();
        this.errores = []; // Array para almacenar los errores
        this.resultados = []; // Array para almacenar los resultados
        this.impresionResultado = []; // Nuevo array para almacenar los resultados de la impresión
    
    }

    reportError(error) {
        this.errores.push(error);
        console.log(error); // Mostrar el error en la consola
    }

    // Método para obtener los errores acumulados
    getErrores() {
        return this.errores;
    }

    // Método para obtener los resultados acumulados
    getResultados() {
        return this.resultados;
    }

    // Visita un árbol de análisis producido por CompiladorParser#start
    visitStart(ctx) {
        return this.visitChildren(ctx);
    }

    // Visita un árbol de análisis producido por CompiladorParser#contenido
    visitContenido(ctx) {
        return this.visitChildren(ctx);
    }

    // Método para manejar la declaración de variables
    // Método para manejar la declaración de variables
visitDeclaracion(ctx) {
    const variableName = ctx.ID().getText();
    const variableType = ctx.pr().getText();
    let defaultValue;

    // Validar el nombre de la variable
    if (!/^[a-zA-Z_]+$/.test(variableName)) {
        this.reportError(`El nombre de la variable '${variableName}' no debe contener números`);
        return null; // No asignar ningún valor
    }

    // Verificar si el nombre de la variable ya está en uso  
    if (this.memory.has(variableName)) {
        this.reportError(`El nombre de la variable '${variableName}' ya está en uso`);
        return null; // No asignar ningún valor
    }

    // Verificar si se proporciona un valor para la variable
    if (ctx.ASIGNACION()) {
        // Si se proporciona una expresión, evalúala
        const valor = this.visit(ctx.valor());
        
        // Verificar si el valor asignado es una letra
        if (variableType === 'ltr') {
            if (typeof valor !== 'string' || valor.length !== 1 || !/[a-zA-Z]/.test(valor)) {
                console.log(valor.length);
                console.log(valor);
                this.reportError(`El valor asignado a la variable '${variableName}' no es una letra`);
                return null;
            }
        }

        defaultValue = valor;
    } else {
        // Asignar un valor por defecto según el tipo de la variable
        switch (variableType) {
            case 'ent': // int
                defaultValue = 0;
                break;
            case 'ltr': // char
                defaultValue = ' ';
                break;
            case 'dec': // float
                defaultValue = 0.0;
                break;
            default:
                this.reportError(`Tipo de variable no reconocido: ${variableType}`);
                return null;
        }
    }

    // Verificar si falta un punto y coma (;) al final de la declaración de variable
    const lastChild = ctx.getChild(ctx.getChildCount() - 1);
    if (lastChild.getText() !== ';') {
        console.log(`valor ${lastChild.getText()}`);
        this.reportError('Error: Falta un punto y coma (;) al final de la declaración de variable');
        return null;
    }

    // Asignar el valor por defecto a la variable (solo si no hay errores)
    this.memory.set(variableName, defaultValue);

    // Mostrar en la consola el nombre de la variable y su valor por defecto
    console.log(`La variable ${variableName} tiene un valor de: ${defaultValue}`);
    // Almacenar el resultado en el array de resultados
    this.resultados.push(`La variable '${variableName}' ha sido declarada con valor por defecto: ${defaultValue}`);

    return null; // No necesita retornar nada en este punto
}


    // Método para manejar la asignación de variables
    visitAsignacion(ctx) {
        const variableName = ctx.ID().getText();
        const valor = this.visit(ctx.valor());

        // Verificar si la variable existe en la memoria
        if (!this.memory.has(variableName)) {
            this.reportError(`La variable '${variableName}' no ha sido declarada anteriormente`);
            return null;
        }

        // Verificar el tipo de la variable
        const variableType = this.memory.get(variableName);
        const tipoValor = typeof valor;
        if (typeof variableType !== tipoValor) {
            this.reportError(`El tipo de valor asignado a la variable '${variableName}' no es compatible`);
            return null;
        }

        // Si la variable ya está en la memoria y el tipo es compatible, se actualiza su valor
        this.memory.set(variableName, valor);

        // Mostrar en la consola el nombre de la variable y su nuevo valor
        console.log(`La variable '${variableName}' ha sido actualizada a: ${valor}`);

        // Almacenar el resultado en el array de resultados
        this.resultados.push(`La variable '${variableName}' ha sido asignada a: ${valor}`);

        return null;
    }

    // Método para obtener los resultados de la impresión
    getImpresionResultado() {
        return this.impresionResultado;
    }

    // Método para manejar la impresión de valores
    visitImprimir(ctx) {
        const value = this.visit(ctx.valor());

        // Verificar si el valor es un identificador
        if (ctx.valor().ID) {
            const id = ctx.valor().ID().getText();
            if (!this.memory.has(id)) {
                this.reportError(`Error: La variable '${id}' no ha sido asignada`);
                return null;
            }
        }

        console.log(value); // Mostrar el valor impreso en la consola
        this.impresionResultado.push(value); // Almacenar el valor en el array de resultados de impresión
        return null;
    }


    // Método para obtener el valor de una variable
    visitId(ctx) {
        // ID
        let id = ctx.ID().getText();
        if (this.memory.has(id)) return this.memory.get(id);
        return 0;
    }
    

    visitMulDiv(ctx) {
        // expr op=('*'|'/') expr
        let left = this.visit(ctx.valor(0)); // obtener el valor de la subexpresión izquierda
        let right = this.visit(ctx.valor(1)); // obtener el valor de la subexpresión derecha
        if (ctx.op.type === CompiladorParser.MUL) return left * right;
        return left / right; // debe ser DIV
    }

    visitAddSub(ctx) {
        // expr op=('+'|'-') expr
        let left = this.visit(ctx.valor(0)); // obtener el valor de la subexpresión izquierda
        let right = this.visit(ctx.valor(1)); // obtener el valor de la subexpresión derecha
        if (ctx.op.type === CompiladorParser.ADD) return left + right;
        return left - right; // debe ser SUB
    }

    visitInt(ctx) {
        return parseInt(ctx.INT().getText());
    }

    // Método para manejar los valores flotantes
    visitFloat(ctx) {
        return parseFloat(ctx.FLOAT().getText());
    }

    // Método para manejar los caracteres
    visitChar(ctx) {
        return ctx.CHAR().getText();
    }

    // Método para manejar los paréntesis
    visitParens(ctx) {
        // Retorna el valor de la expresión dentro de los paréntesis
        return this.visit(ctx.valor());
    }

}
