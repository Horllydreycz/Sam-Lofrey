import * as React from "react";
const cn = (...classes) => classes.filter(Boolean).join(" ");

const ALERT_BASE_CLASS =
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4";

const ALERT_VARIANTS = {
  default: "border-zinc-200 bg-white text-zinc-900",
  destructive: "border-red-300 bg-red-50 text-red-700 [&>svg]:text-red-700",
};

const Alert = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(
        ALERT_BASE_CLASS,
        ALERT_VARIANTS[variant] || ALERT_VARIANTS.default,
        className,
      )}
      {...props}
    />
  ),
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
