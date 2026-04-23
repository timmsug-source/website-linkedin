// Landing pages have no navbar/footer for maximum conversion focus
export default function LpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
