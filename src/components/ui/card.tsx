import * as React from "react";
import { cn } from "@/lib/utils";

// 📦 Card base
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-lg border bg-card text-black shadow-sm", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

// 🧱 CardHeader con espacio vertical amplio
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-6 p-6", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

// 🏷️ CardTitle con encabezado dinámico
type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4";
};

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, as: Tag = "h3", ...props }, ref) => (
    <Tag
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

// 📝 CardDescription con mejor legibilidad
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-base text-neutral-700 leading-relaxed", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

// 📄 CardContent
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

// 🔚 CardFooter
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

// 🚀 Exportación
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
