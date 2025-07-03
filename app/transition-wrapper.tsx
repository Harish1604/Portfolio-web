"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";

export default function TransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <PageWrapper key={pathname}>{children}</PageWrapper>
    </AnimatePresence>
  );
}
