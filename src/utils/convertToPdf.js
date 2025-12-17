import markdownParser from "./markdownParser";

const convertToPdf = async (markdownText, title) => {
  // 1. Carga la librería bajo demanda
  const html2pdf = (await import("html2pdf.js")).default;

  const htmlContent = markdownParser(markdownText);

  // 2. Envoltura semántica para mejorar la accesibilidad del PDF
  const elementToConvert = document.createElement("div");
  elementToConvert.className = "pdf-export-container";
  elementToConvert.innerHTML = htmlContent;

  const opt = {
    margin: [0.5, 0.5],
    filename: `${title}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      letterRendering: true,
      backgroundColor: "#ffffff",
      useCORS: true,
    },
    enableLinks: true, // Crucial para los enlaces Markdown [cite: 32, 33]
    jsPDF: {
      unit: "in",
      format: "a4",
      orientation: "portrait",
      compress: true,
    },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  };

  // Ejecución asíncrona
  await html2pdf().set(opt).from(elementToConvert).save();
};

export default convertToPdf;
