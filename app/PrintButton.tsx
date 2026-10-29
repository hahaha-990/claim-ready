"use client";
export default function PrintButton({ className, children }: { className?: string; children: React.ReactNode }) {
  return <button className={className} onClick={() => window.print()}>{children}</button>;
}
