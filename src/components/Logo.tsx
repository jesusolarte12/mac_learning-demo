import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  showText?: boolean;
}

export const Logo = ({ className, variant = "dark", showText = false }: LogoProps) => {
  const color = variant === "light" ? "text-white" : "text-primary";
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 60 60"
        className={cn("w-12 h-12", color)}
        fill="currentColor"
      >
        {/* MAC Learning Logo - Stylized book/learning icon */}
        <rect x="8" y="12" width="4" height="36" rx="1" />
        <rect x="14" y="8" width="4" height="44" rx="1" />
        <rect x="20" y="12" width="4" height="36" rx="1" />
        <rect x="26" y="16" width="4" height="28" rx="1" />
        <rect x="36" y="12" width="4" height="36" rx="1" />
        <rect x="42" y="8" width="4" height="44" rx="1" />
        <rect x="48" y="12" width="4" height="36" rx="1" />
        <rect x="8" y="22" width="20" height="4" rx="1" />
        <rect x="8" y="34" width="20" height="4" rx="1" />
        <rect x="36" y="22" width="16" height="4" rx="1" />
        <rect x="36" y="34" width="16" height="4" rx="1" />
      </svg>
      {showText && (
        <span className={cn("text-xl font-bold", color)}>
          MAC LEARNING
        </span>
      )}
    </div>
  );
};

export const LogoSoluciones = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <svg
        viewBox="0 0 60 60"
        className="w-16 h-16 text-primary"
        fill="currentColor"
      >
        <rect x="8" y="12" width="4" height="36" rx="1" />
        <rect x="14" y="8" width="4" height="44" rx="1" />
        <rect x="20" y="12" width="4" height="36" rx="1" />
        <rect x="26" y="16" width="4" height="28" rx="1" />
        <rect x="36" y="12" width="4" height="36" rx="1" />
        <rect x="42" y="8" width="4" height="44" rx="1" />
        <rect x="48" y="12" width="4" height="36" rx="1" />
        <rect x="8" y="22" width="20" height="4" rx="1" />
        <rect x="8" y="34" width="20" height="4" rx="1" />
        <rect x="36" y="22" width="16" height="4" rx="1" />
        <rect x="36" y="34" width="16" height="4" rx="1" />
      </svg>
      <span className="script-font text-primary text-xl mt-2">Soluciones Eficientes</span>
    </div>
  );
};
