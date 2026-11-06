import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
  showGlow?: boolean;
}

export default function Logo({ size = 44, className = "", showGlow = true }: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {showGlow && (
        <div 
          className="absolute inset-0 rounded-full bg-amber-500/20 blur-md -z-10 scale-110" 
          aria-hidden="true" 
        />
      )}
      <Image
        src="/images/logo-hmtf.png"
        alt="Logo HMTF Telkom University"
        width={size}
        height={size}
        className="rounded-full object-contain"
        priority
      />
    </div>
  );
}
