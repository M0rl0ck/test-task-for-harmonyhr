import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/store";

interface Props {
  user: User;
}

export function MyInfoDetails({ user }: Props) {
  return (
    <div className="flex flex-col mt-[-150px]">
      <div className="w-[--aside_width] pl-28">
        <Avatar className="w-[150px] h-[150px]">
          <AvatarImage src={user.avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
