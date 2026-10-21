import { useState, useCallback } from 'react';

export function useCopyToClipboard(resetDuration = 2500) {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copy = useCallback(
    async (text: string) => {
      if (!navigator?.clipboard) {
        // Fallback for non-secure contexts
        try {
          const textarea = document.createElement('textarea');
          textarea.value = text;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          setCopiedText(text);
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), resetDuration);
          return true;
        } catch {
          return false;
        }
      }

      try {
        await navigator.clipboard.writeText(text);
        setCopiedText(text);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), resetDuration);
        return true;
      } catch (err) {
        console.warn('Copy to clipboard failed', err);
        setIsCopied(false);
        return false;
      }
    },
    [resetDuration],
  );

  return { copy, isCopied, copiedText };
}
