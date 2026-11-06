import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
  framed?: boolean;
}

export default function Logo({ size = 44, className = "", framed = false }: LogoProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${
        framed ? "p-1 rounded-full border border-slate-200 bg-white shadow-xs" : ""
      } ${className}`}
    >
      <Image
        src="/images/logo-hmtf.png"
        alt="Logo Resmi HMTF Telkom University"
        width={size}
        height={size}
        className="rounded-full object-contain"
        priority
      />
    </div>
  );
}
