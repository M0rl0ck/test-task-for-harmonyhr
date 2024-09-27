import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface MyInfoContentCardProps {
  title: string;
  imageSrc: string;
  value: string;
  description: string;
  caption: string;
  addition?: string;
}

export function MyInfoContentCard({
  title,
  imageSrc,
  value,
  description,
  caption,
  addition,
}: MyInfoContentCardProps) {
  return (
    <div className="w-[264px] h-[163px] text-sm leading-4 flex flex-col justify-between items-center">
      <Card className="w-full h-[138px] rounded-lg bg-bgGray font-semibold">
        <CardContent className="h-full py-4 flex flex-col justify-center gap-1 items-center">
          <h3 className="text-xl leading-6">{title}</h3>
          <div className="text-3xl flex items-center gap-2">
            <div className="w-[30px] h-[30px] relative">
              <Image src={imageSrc} fill alt={title} />
            </div>

            {value}
          </div>
          <p>{description}</p>
          {addition && <p className="text-dividerColor">{addition}</p>}
        </CardContent>
      </Card>
      <p className="text-dividerColor">{caption}</p>
    </div>
  );
}
