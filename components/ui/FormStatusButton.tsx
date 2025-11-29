"use client";

import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "./Button";
import { Loader2 } from "lucide-react";

/**
 * React 19 useFormStatus hook example
 * Access form submission status from child components
 */
export function FormStatusButton({
  children,
  loadingText = "Submitting...",
  ...props
}: ButtonProps & { loadingText?: string }) {
  const { pending } = useFormStatus();

  // Spread props first, then override disabled to ensure pending state takes precedence
  // If pending is true, button is always disabled (prevents external disabled={false} from overriding)
  // If pending is false, respects external disabled prop
  return (
    <Button {...props} disabled={pending || props.disabled}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Button>
  );
}

