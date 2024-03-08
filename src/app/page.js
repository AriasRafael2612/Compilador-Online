'use client';

import React, { useState, useEffect, useRef } from "react";
import { analizar } from "./module/generator.js";
import CodeMirror from '../../node_modules/codemirror';

const HomePage = () => {
  const [codigo, setCodigo] = useState("");
  const [resultados, setResultados] = useState(""); // Estado para almacenar los resultados
  const [errores, setErrores] = useState(""); // Estado para almacenar los errores
  const [impresiones, setImpresiones] = useState(""); // Estado para almacenar las impresiones

  const handleRun = () => {
    // Limpia los errores antes de ejecutar el código nuevamente
    setErrores("");

    // Ejecuta el código y obtén resultados, errores e impresiones
    const { resultados, errores, impresiones } = analizar(codigo);

    // Actualiza los estados correspondientes
    setResultados(resultados);
    setErrores(errores);
    setImpresiones(impresiones);

    // Por ahora, solo imprimimos el código ingresado en la consola
    console.log("Código ingresado:", codigo);
  };

  const handleDelete = () => {
    setCodigo("");
    setResultados(""); // Limpiar los resultados al eliminar el código
    setErrores(""); // Limpiar los errores al eliminar el código
    setImpresiones(""); // Limpiar las impresiones al eliminar el código
  };

  // Función para contar las líneas de código
  const countLines = (code) => {
    return code.split("\n").length;
  };

  const textAreaRef = useRef(null);
  const impresionesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = textAreaRef.current.scrollTop;
      textAreaRef.current.previousSibling.scrollTop = scrollTop;
    };

    textAreaRef.current.addEventListener("scroll", handleScroll);

    return () => {
      textAreaRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll hasta el final del textarea de impresiones cuando se actualizan las impresiones
    impresionesRef.current.scrollTop = impresionesRef.current.scrollHeight;
  }, [impresiones]);

  return (
    <div style={{ backgroundColor: "#282c34", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Courier, monospace", color: "#abb2bf" }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", width: "100%", padding: "20px" }}>
        <div style={{ flex: "1", marginLeft: "20px", position: "relative" }}>
          <div style={{ width: "100%", backgroundColor: "#1e2227", borderRadius: "5px", border: "1px solid #61dafb", marginBottom: "20px", position: "relative" }}>
            <div style={{ position: "absolute", top: 12, bottom: 0, left: "3px", width: "2em", paddingRight: "5px", overflow: "hidden", display: "flex", flexDirection: "column", gap: "5px" }}>
              {[...Array(countLines(codigo)).keys()].map((num) => (
                <div key={num + 1} style={{ lineHeight: "1.2em", marginBottom: "0.01px" }}>{num + 1}</div>
              ))}
            </div>
            <textarea
              ref={textAreaRef}
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              rows={21}
              placeholder="Ingrese su código aquí"
              style={{ width: "calc(100% - 2em)", backgroundColor: "#1e2227", color: "#abb2bf", border: "1px solid #61dafb", borderRadius: "5px", padding: "10px", resize: "none", marginLeft: "2em" }}
            />
          </div>
        </div>

        <div style={{ flex: "1", marginLeft: "20px", position: "relative" }}>
          <div style={{ width: "100%", backgroundColor: "#1e2227", borderRadius: "5px", border: "1px solid #61dafb", marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 10px", borderBottom: "1px solid #61dafb" }}>
              <h2 style={{ color: "#61dafb", margin: "0" }}>Resultados</h2>
              <button onClick={handleRun} style={{ backgroundColor: "#61dafb", color: "#282c34", border: "none", borderRadius: "5px", cursor: "pointer", padding: "5px 10px" }}>RUN</button>
            </div>
            {/* <textarea
              value={resultados}
              rows={10}
              readOnly
              style={{ width: "100%", backgroundColor: "#282c34", color: "#abb2bf", border: "none", borderRadius: "0 0 5px 5px", padding: "10px", resize: "none" }}
            /> */}
          </div>
          <div style={{ width: "100%", backgroundColor: "#1e2227", borderRadius: "5px", border: "1px solid #61dafb" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 10px", borderBottom: "1px solid #61dafb" }}>
              <h2 style={{ color: "#61dafb", margin: "0" }}>Errores</h2>
              <button onClick={handleDelete} style={{ backgroundColor: "#61dafb", color: "#282c34", border: "none", borderRadius: "5px", cursor: "pointer", padding: "5px 10px" }}>Limpiar</button>
            </div>
            <textarea
              value={errores}
              rows={8}
              readOnly
              style={{ width: "100%", backgroundColor: "#282c34", color: "#abb2bf", border: "none", borderRadius: "0", padding: "10px", resize: "none" }}
            />
          </div>
          <div style={{ width: "100%", backgroundColor: "#1e2227", borderRadius: "5px", border: "1px solid #61dafb", marginTop: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 10px", borderBottom: "1px solid #61dafb" }}>
              <h2 style={{ color: "#61dafb", margin: "0" }}>Impresiones</h2>
            </div>
            <textarea
              ref={impresionesRef}
              value={impresiones}
              rows={6}
              readOnly
              style={{ width: "100%", backgroundColor: "#282c34", color: "#abb2bf", border: "none", borderRadius: "0 0 5px 5px", padding: "10px", resize: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
