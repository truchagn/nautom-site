import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | Nautom",
  description:
    "Conocé a Nautom — agencia boutique de inteligencia artificial y automatización para PyMEs argentinas. Tecnología de punta con dedicación real.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
