'use client';


import React, { useState, useEffect, useRef } from "react";
import { analizar } from "./module/generator.js";
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { javascript } from '@codemirror/lang-javascript';

const HomePage = () => {
  const [codigo, setCodigo] = useState("console.log('Hola, mundo!');");
  const [resultados, setResultados] = useState("");
  const [errores, setErrores] = useState("");
  const [impresiones, setImpresiones] = useState("");

  const handleRun = () => {
    setErrores("");
    const { resultados, errores, impresiones } = analizar(codigo);
    setResultados(resultados);
    setErrores(errores);
    setImpresiones(impresiones);
    console.log("Código ingresado:", codigo);
  };

  const handleDelete = () => {
    setCodigo("");
    setResultados("");
    setErrores("");
    setImpresiones("");
  };


  const textAreaRef = useRef(null);
  const impresionesRef = useRef(null);

 
  return (
    <div style={{ backgroundColor: "#282c34", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Courier, monospace", color: "#abb2bf" }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", width: "100%", padding: "20px" }}>
        <div style={{ flex: "1", marginLeft: "20px", position: "relative" }}>
          <div style={{ width: "100%", backgroundColor: "#1e2227", borderRadius: "5px", border: "1px solid #61dafb", marginBottom: "20px", position: "relative" }}>
            <CodeMirror
              ref={textAreaRef}
              defaultValue={codigo}
              onChange={(value) => setCodigo(value)}
              height={470}
              width="100%"
              theme={dracula}
              rows={8}
              language="javascript"
              style={{ marginLeft: "2em" }}
            />
          </div>
        </div>

        <div style={{ flex: "1", marginLeft: "20px", position: "relative" }}>
          <div style={{ width: "100%", backgroundColor: "#1e2227", borderRadius: "5px", border: "1px solid #61dafb", marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 10px", borderBottom: "1px solid #61dafb" }}>
              <h2 style={{ color: "#61dafb", margin: "0" }}>Resultados</h2>
              <button onClick={handleRun} style={{ backgroundColor: "#61dafb", color: "#282c34", border: "none", borderRadius: "5px", cursor: "pointer", padding: "5px 10px" }}>RUN</button>
            </div>
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
