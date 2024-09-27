import { Card, CardContent } from "@/components/ui/card";

export function MyInfoCard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Card className="w-full pt-6 bg-cardBg">
      <CardContent className="text-sm font-medium">{children}</CardContent>
    </Card>
  );
}
