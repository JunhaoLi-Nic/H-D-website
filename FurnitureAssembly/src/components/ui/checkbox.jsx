import React from "react";

const Checkbox = React.forwardRef(({ className = "", ...props }, ref) => (
  <input
    type="checkbox"
    ref={ref}
    className={`h-4 w-4 rounded border border-input bg-background text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
));

Checkbox.displayName = "Checkbox";

export { Checkbox }; 