import React, { forwardRef, useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div>
        {label && (
          <label htmlFor={id} className="font-mono inline-block mb-1 pl-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`px-3 py-2 rounded-lg bg-white text-black duration-200 w-full ${className} focus:outline-none shadow-[0_2px_2px_rgba(0,0,0,0.2)] font-mono`}
          {...props}
          id={id}
        />
      </div>
    );
  }
);

export default Input;
