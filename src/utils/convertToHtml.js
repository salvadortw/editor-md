import markdownParser from "./markdownParser";

const convertToHtml = (markdownText, title) => {
  const htmlContent = markdownParser(markdownText);

  const fullHtml = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>
    <body>
        <article class="markdown-body">
            ${htmlContent}
        </article>
    </body>
    </html>
  `;

  const blob = new Blob([fullHtml], { type: "text/html" });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${title}.html`;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export default convertToHtml;
