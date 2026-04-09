export const metadata = {
  title: "Al-Hidaayah CMS Studio",
  description: "Content management for Al-Hidaayah Platinum Travels",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
