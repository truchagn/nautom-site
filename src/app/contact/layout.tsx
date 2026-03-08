import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Nautom",
  description:
    "Contactá a Nautom. Contanos tu desafío y te proponemos una solución con IA y automatización a medida para tu empresa.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
