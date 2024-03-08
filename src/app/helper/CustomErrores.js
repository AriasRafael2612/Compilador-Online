import { ErrorListener } from 'antlr4';

export default class CustomErrores extends ErrorListener{

    syntaxError(recognizer, offendingSymbol, line, column, message) {
        throw new Error(` ${message} (${line}:${column})`);
    }

}

// console.log(this.notifyListeners);
























// import antlr4 from "antlr4";
// import CompiladorLexer from "../../CompiladorLexer";
// import CompiladorParser from "../../CompiladorParser";
// import CustomVisitor from "../helper/CustomVisitor.js";

// export const analizar = (input) => {
//   const chars = new antlr4.InputStream(input);
//   const lexer = new CompiladorLexer(chars);
//   const tokens = new antlr4.CommonTokenStream(lexer);
  
//   const errorListener = new antlr4.error.ErrorListener();
//   lexer.removeErrorListeners();
//   lexer.addErrorListener(errorListener);

//   const parser = new CompiladorParser(tokens);
//   parser.buildParseTrees = true;
//   parser.removeErrorListeners();
//   parser.addErrorListener(errorListener);

//   let errores = [];
//   let resultados = [];

//   // Manejar errores del lexer
//   lexer.addErrorListener({
//     syntaxError: function(recognizer, offendingSymbol, line, column, msg, e) {
//       errores.push(`Error léxico en línea ${line}:${column} - ${msg}`);
//     }
//   });

//   // Manejar errores del parser
//   parser.addErrorListener({
//     syntaxError: function(recognizer, offendingSymbol, line, column, msg, e) {
//       errores.push(`Error sintáctico en línea ${line}:${column} - ${msg}`);
//     }
//   });

//   const tree = parser.start();

//   // Si hay errores, retornar inmediatamente
//   if (errores.length > 0) {
//     return { errores, resultados };
//   }

//   const customVisitor = new CustomVisitor();

//   // Realiza la visita del árbol con el CustomVisitor
//   customVisitor.visit(tree);

//   // Obtiene los errores acumulados del CustomVisitor
//   const customVisitorErrores = customVisitor.getErrores();

//   // Si hay errores provenientes del CustomVisitor, retornar inmediatamente
//   if (customVisitorErrores.length > 0) {
//     errores.push(...customVisitorErrores);
//     return { errores, resultados };
//   }

//   // Obtiene los resultados acumulados del CustomVisitor
//   resultados = customVisitor.getResultados();
//   console.log(resultados);

//   // Devuelve los errores y resultados acumulados
//   return { errores, resultados };
// };




















