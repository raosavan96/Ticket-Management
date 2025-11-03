import React from "react";
import { Spinner } from "@/components/ui/spinner";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ButtonLoading = ({
  type,
  text = "Submit",
  loading = false,
  onClick,
  className,
  variant = "default",
  ...props
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      variant={variant}
      className={cn(buttonVariants({ variant }), className)}
      disabled={loading}
      {...props}
    >
      {loading && <Spinner />}
      {text}
    </Button>
  );
};

export default ButtonLoading;