import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/store";
import { Contacts } from "./Contacts";
import { HireDate } from "./HireDate";
import { DirectReports } from "./DirectReports";
import { Block5 } from "./Block5";

interface Props {
  user: User;
}

export function MyInfoDetails({ user }: Props) {
  return (
    <div className="flex flex-col mt-[-150px] items-center w-[--aside-width] max-md:w-[--aside_small_width] pl-[72px] max-md:pl-6 max-md:absolute">
      <Avatar className="w-[150px] h-[150px] max-md:w-[60px] max-md:h-[60px]">
        <AvatarImage src={user.avatar} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col mt-[-10px] gap-4 items-center w-56 max-md:hidden">
        <Contacts />
        <HireDate />
        <Block5 />
        <DirectReports />
      </div>
    </div>
  );
}
