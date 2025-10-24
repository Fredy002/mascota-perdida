import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-5RGNKQXF.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/DownloadPDF.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\DownloadPDF.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\DownloadPDF.tsx"
  );
  import.meta.hot.lastModified = "1761278864843.76";
}
function DownloadPDF() {
  const downloadPDF = async () => {
    try {
      const html2canvas = (await import("/build/_shared/html2canvas-YI6GYC2A.js")).default;
      const jsPDF = (await import("/build/_shared/jspdf.es.min-6TYBGQY2.js")).default;
      const flyerElement = document.querySelector(".flyer");
      if (!flyerElement) {
        alert("No se pudo encontrar el contenido para capturar.");
        return;
      }
      const tempElement = flyerElement.cloneNode(true);
      const downloadSection = tempElement.querySelector(".download-section");
      const printSection = tempElement.querySelector(".print-section");
      if (downloadSection)
        downloadSection.remove();
      if (printSection)
        printSection.remove();
      tempElement.style.margin = "0";
      tempElement.style.padding = "20px";
      tempElement.style.boxSizing = "border-box";
      tempElement.style.position = "absolute";
      tempElement.style.top = "-9999px";
      tempElement.style.left = "-9999px";
      tempElement.style.width = "794px";
      tempElement.style.height = "1123px";
      tempElement.style.backgroundColor = "#ffffff";
      tempElement.style.overflow = "hidden";
      document.body.appendChild(tempElement);
      await new Promise((resolve) => setTimeout(resolve, 100));
      const canvas = await html2canvas(tempElement, {
        scale: 2,
        // Mayor calidad
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
        width: 794,
        // Ancho A4 en píxeles
        height: 1123,
        // Alto A4 en píxeles
        scrollX: 0,
        scrollY: 0
      });
      document.body.removeChild(tempElement);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save("isabela-perdida.pdf");
    } catch (error) {
      console.error("Error al generar PDF:", error);
      alert("Error al generar el PDF. Por favor, int\xE9ntalo de nuevo.");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "download-section", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: downloadPDF, className: "download-btn", children: "\u{1F4C4} Descargar PDF para Imprimir" }, void 0, false, {
      fileName: "app/components/DownloadPDF.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "download-info", children: "Descarga el volante en formato PDF optimizado para impresi\xF3n en papel A4" }, void 0, false, {
      fileName: "app/components/DownloadPDF.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/DownloadPDF.tsx",
    lineNumber: 101,
    columnNumber: 10
  }, this);
}
_c = DownloadPDF;
var _c;
$RefreshReg$(_c, "DownloadPDF");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/PrintButton.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\PrintButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\PrintButton.tsx"
  );
  import.meta.hot.lastModified = "1761278390863.3796";
}
function PrintButton() {
  const handlePrint = () => {
    window.print();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "print-section", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: handlePrint, className: "print-btn", children: "\u{1F5A8}\uFE0F Imprimir P\xE1gina" }, void 0, false, {
      fileName: "app/components/PrintButton.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "print-info", children: "Imprime directamente desde el navegador (Ctrl+P)" }, void 0, false, {
      fileName: "app/components/PrintButton.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PrintButton.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = PrintButton;
var _c2;
$RefreshReg$(_c2, "PrintButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1761278721870.4873";
}
var meta = () => {
  return [{
    title: "\xA1Se perdi\xF3 Isabela!"
  }, {
    name: "description",
    content: "Ay\xFAdanos a encontrar a nuestra querida perrita Isabela"
  }];
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flyer", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "\u{1F31F} \xA1SE PERDI\xD3 MI PERRITA ISABELA! \u{1F31F}" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "\xBFLa has visto? \xA1Por favor, ay\xFAdanos a encontrarla!" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "photo-placeholder", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "/isabela.jpg", alt: "Isabela" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: "\u{1F4CC} Nombre:" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      " Isabela",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 41,
        columnNumber: 44
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: "\u{1F436} Raza:" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      " Peque\xF1a mestiza \u2014 pelaje blanco con manchas marrones en orejas y cabeza",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 42,
        columnNumber: 106
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: "\u{1F440} Caracter\xEDsticas:" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      " Ojos grandes y expresivos, nariz rosada, orejas ca\xEDdas, tama\xF1o peque\xF1o",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 43,
        columnNumber: 116
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: "\u{1F4CD} \xDAltima vez vista:" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      " Cerca al ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: "\xD3valo Chama" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 44,
        columnNumber: 56
      }, this),
      ", por la ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: "Avenida Universitaria" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 44,
        columnNumber: 93
      }, this),
      ", cerca a la ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: "Avenida Pachac\xFAtec" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 44,
        columnNumber: 144
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 44,
        columnNumber: 179
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: "\u{1F4C5} Fecha de desaparici\xF3n:" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      " [Indica la fecha, ej: 15 de abril de 2025]"
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "contact", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: "\u{1F4DE} \xA1LL\xC1MAME SI LA VES O SABES ALGO!" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 49,
        columnNumber: 61
      }, this),
      "Tel\xE9fono: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "tel:+51999888777", children: "+51 999 888 777" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 50,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 50,
        columnNumber: 65
      }, this),
      "WhatsApp: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://wa.me/51999888777", children: "Haz clic aqu\xED" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 51,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 51,
        columnNumber: 72
      }, this),
      "Correo: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "mailto:tucorreo@example.com", children: "tucorreo@example.com" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 52,
        columnNumber: 79
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      "\u{1F4B0} ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: "RECOMPENSA por su retorno seguro." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 54,
        columnNumber: 12
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "share", children: [
      "\u{1F4E2} ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: "\xA1POR FAVOR, COMPARTAN ESTE AVISO!" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 58,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 58,
        columnNumber: 62
      }, this),
      "En redes sociales, grupos de vecinos, tiendas, veterinarias... \xA1Cada persona cuenta!"
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer", children: "\u2764\uFE0F Gracias por tu coraz\xF3n y tu ayuda. No la dejemos sola." }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DownloadPDF, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PrintButton, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c3 = Index;
var _c3;
$RefreshReg$(_c3, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-R5TKBPKG.js.map
