import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function PrintButton() {
    const handlePrint = () => {
        window.print();
    };
    return (_jsxs("div", { className: "print-section", children: [_jsx("button", { onClick: handlePrint, className: "print-btn", children: "\uD83D\uDDA8\uFE0F Imprimir P\u00E1gina" }), _jsx("p", { className: "print-info", children: "Imprime directamente desde el navegador (Ctrl+P)" })] }));
}
