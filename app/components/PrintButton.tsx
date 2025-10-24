export default function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print-section">
      <button onClick={handlePrint} className="print-btn">
        🖨️ Imprimir Página
      </button>
      <p className="print-info">
        Imprime directamente desde el navegador (Ctrl+P)
      </p>
    </div>
  );
}
