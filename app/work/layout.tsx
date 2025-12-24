import ScrollTracker from "@/components/ScrollTracker";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <ScrollTracker />
      {children}
    </section>
  );
}