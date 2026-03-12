// Funnel pages are distraction-free — no Navbar or Footer
export default function FunnelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
