import { Link } from "react-router-dom";

function Button({
  children,
  className,
  to,
}: {
  children: React.ReactNode;
  className?: string;
  to: string;
}) {
  return (
    <div>
      <button className={` hover:scale-110 py-2 px-12 ${className || ""}`}>
        <Link to={to}>{children}</Link>
      </button>
    </div>
  );
}

export default Button;
