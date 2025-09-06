import React from "react";

const Sheet = ({ children, open, onOpenChange }) => {
  return (
    <div className="relative">
      {children}
      {open && (
        <div className="fixed inset-0 z-50">
          <div 
            className="fixed inset-0 bg-black/50" 
            onClick={() => onOpenChange(false)}
          />
        </div>
      )}
    </div>
  );
};

const SheetTrigger = React.forwardRef(({ children, asChild, ...props }, ref) => {
  if (asChild) {
    return React.cloneElement(children, { ref, ...props });
  }
  return <button ref={ref} {...props}>{children}</button>;
});
SheetTrigger.displayName = "SheetTrigger";

const SheetContent = React.forwardRef(({ 
  className = "", 
  side = "right", 
  children, 
  ...props 
}, ref) => {
  const sideClasses = {
    top: "inset-x-0 top-0 border-b",
    bottom: "inset-x-0 bottom-0 border-t",
    left: "inset-y-0 left-0 border-r",
    right: "inset-y-0 right-0 border-l",
  };

  const slideClasses = {
    top: "slide-in-from-top",
    bottom: "slide-in-from-bottom", 
    left: "slide-in-from-left",
    right: "slide-in-from-right",
  };

  return (
    <div
      ref={ref}
      className={`fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out ${sideClasses[side]} ${slideClasses[side]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});
SheetContent.displayName = "SheetContent";

export { Sheet, SheetTrigger, SheetContent }; 