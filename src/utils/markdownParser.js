import DOMPurify from "dompurify";
import { Marked } from "marked";

const markdownParser = (markdownContent) => {
  const marked = new Marked({ pedantic: false, gfm: true });

  const rawHtml = marked.parse(markdownContent);
  const cleanHtml = DOMPurify.sanitize(rawHtml);

  return cleanHtml;
};

export default markdownParser;
