import Link from "next/link";
import { ButtonProps } from "@/lib/types";

export default function Button({
  variant = "primary",
  children,
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center px-8 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer";

  const variants = {
    primary: "bg-white text-mahogany hover:text-white hover:bg-mahogany/90",
    secondary: "bg-mahogany text-white hover:bg-mahogany/90",
    outline:
      "bg-transparent border border-white text-white hover:bg-white hover:text-mahogany",
    link: "text-xs text-black/75 font-bold uppercase tracking-widest  underline underline-offset-5 underline-tobacco/50 pb-1 hover:text-tobacco transition-colors",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
