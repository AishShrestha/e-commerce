import { Link } from "react-router-dom";
import { ButtonHTMLAttributes } from "react";

function Button({
  children,
  className,
  to,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  to: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div>
      <button
        className={`hover:scale-110 py-2 px-12 ${className || ""}`}
        {...props}
      >
        <Link to={to}>{children}</Link>
      </button>
    </div>
  );
}

export default Button;
