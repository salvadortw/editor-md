const convertToTxt = (markdownText, title) => {
  const txtContent = markdownText;

  const blob = new Blob([txtContent], { type: "text/plain" });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${title}.txt`;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export default convertToTxt;
