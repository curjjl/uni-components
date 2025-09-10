export interface DemoConfig {
  title: string;
  description?: string;
  code: string;
  component: any;
}

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // 降级方案
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    return successful;
  }
};

export const formatCode = (code: string): string => {
  return code
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .trim();
};
