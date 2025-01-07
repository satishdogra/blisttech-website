// components/BootstrapScript.js
"use client"; // Ensure this is treated as a Client Component

import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function BootstrapScript() {
  useEffect(() => {
    // Bootstrap JavaScript will initialize here if needed
  }, []);

  return null; // No UI; just for loading Bootstrap JS
}
