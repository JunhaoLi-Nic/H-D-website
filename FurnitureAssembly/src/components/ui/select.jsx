import React from "react";

const Select = React.forwardRef(({ className = "", children, placeholder, ...props }, ref) => {
  return (
    <select
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    >
      {placeholder && <option value="" disabled>{placeholder}</option>}
      {children}
    </select>
  );
});

Select.displayName = "Select";

const SelectContent = ({ children, ...props }) => {
  return <>{children}</>;
};

const SelectItem = React.forwardRef(({ className = "", children, value, ...props }, ref) => {
  return (
    <option value={value} ref={ref} className={className} {...props}>
      {children}
    </option>
  );
});

SelectItem.displayName = "SelectItem";

const SelectTrigger = React.forwardRef(({ className = "", children, ...props }, ref) => {
  // For HTML select, we don't need a separate trigger
  return null;
});

SelectTrigger.displayName = "SelectTrigger";

const SelectValue = ({ placeholder, ...props }) => {
  // For HTML select, this is handled by the select itself
  return null;
};

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue }; 