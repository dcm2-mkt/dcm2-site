import ScrollTracker from "@/components/ScrollTracker";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative z-0">
      {/* FIX: Wrapped ScrollTracker in a div with 'pointer-events-none'.
        This guarantees clicks pass through it, preventing it from blocking the Navbar.
        We also enforce a lower z-index here just in case.
      */}
      <div className="pointer-events-none fixed top-0 left-0 w-full z-40">
        <ScrollTracker />
      </div>

      {/* Main Content */}
      <div className="relative">
        {children}
      </div>
    </section>
  );
}