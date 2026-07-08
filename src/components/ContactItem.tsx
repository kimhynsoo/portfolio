import { MouseEvent, ReactNode, useState } from "react";

const getCopyValue = ({ href, isEmail }: { href: string; isEmail?: boolean }) => {
  if (isEmail) return href;
  if (href.startsWith("tel:")) return href.replace(/^tel:/, "");
  return null;
};

const copyToClipboard = async (value: string) => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

const ContactItem = ({
  children,
  isEmail,
  href,
  className,
}: {
  children: ReactNode;
  href: string;
  isEmail?: boolean;
  className?: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyValue = getCopyValue({ href, isEmail });

  const handleClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    if (!copyValue) return;

    event.preventDefault();
    await copyToClipboard(copyValue);
    setIsCopied(true);
    window.setTimeout(() => setIsCopied(false), 1400);
  };

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={isEmail ? `mailto:${href}` : href}
      onClick={handleClick}
      title={copyValue ? `${copyValue} 복사` : undefined}
      className="w-fit"
    >
      <span
        className={`px-1 text-xs dark:text-GRAY_HEAVY hover:text-BLACK dark:hover:text-BLACK ${className}`}
      >
        {isCopied ? "Copied" : children}
      </span>
    </a>
  );
};

export default ContactItem;
