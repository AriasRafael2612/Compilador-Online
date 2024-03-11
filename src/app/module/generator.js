import antlr4 from "antlr4";
import CompiladorLexer from "../../CompiladorLexer";
import CompiladorParser from "../../CompiladorParser";
import CustomVisitor from "../helper/CustomVisitor.js";

export const analizar = (input) => {
  const chars = new antlr4.InputStream(input);
  const lexer = new CompiladorLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  
  const errorListener = new antlr4.error.ErrorListener();
  lexer.removeErrorListeners();
  lexer.addErrorListener(errorListener);

  const parser = new CompiladorParser(tokens);
  parser.buildParseTrees = true;
  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);

  let errores = [];
  let resultados = [];
  let impresiones = []; // Almacena las impresiones

  // Manejar errores del lexer
  lexer.addErrorListener({
    syntaxError: function(recognizer, offendingSymbol, line, column, msg, e) {
      errores.push(`${line}:${column} - ${msg}`);
    }
  });

  // Manejar errores del parser
  parser.addErrorListener({
    syntaxError: function(recognizer, offendingSymbol, line, column, msg, e) {
      errores.push(`${line}:${column} - ${msg}`);
    }
  });

  const tree = parser.start();

  // Si hay errores del lexer o parser, retornar el primer error encontrado
  if (errores.length > 0) {
    return { errores: [errores[0]], resultados, impresiones }; // También se retorna impresiones vacías
  }

  const customVisitor = new CustomVisitor();

  try {
    // Realiza la visita del árbol con el CustomVisitor
    customVisitor.visit(tree);

    // Obtiene los errores acumulados del CustomVisitor
    const customVisitorErrores = customVisitor.getErrores();

    // Si hay errores provenientes del CustomVisitor, retornar el primero
    if (customVisitorErrores.length > 0) {
      return { errores: [customVisitorErrores[0]], resultados, impresiones }; // También se retorna impresiones vacías
    }
  } catch (error) {
    // Si se produce una excepción durante la visita del árbol, capturarla y retornar el primer error
    return { errores: [error.message], resultados, impresiones };
  }

  // Obtiene los resultados acumulados del CustomVisitor
  resultados = customVisitor.getResultados();
  console.log(resultados);

  // Obtiene los resultados de la impresión acumulados del CustomVisitor
  impresiones = customVisitor.getImpresionResultado();
  console.log(impresiones);

  // Devuelve los errores, resultados e impresiones acumuladas
  return { errores, resultados, impresiones };
};
