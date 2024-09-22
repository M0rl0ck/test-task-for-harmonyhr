import { User } from "@/store";
import { RequestChange } from "./RequestChange";
import { SettingButton } from "./SettingButton";
import { EllipsisVertical } from "lucide-react";

interface Props {
  user: User;
}
export function MyInfoHeder({ user }: Props) {
  return (
    <div className="bg-bgBlue pl-[--aside_width] max-md:pl-[--aside_small_width] pr-6 h-[200px] max-md:h-[157px]">
      <div className="flex justify-between items-center h-full max-w-[--my_info_content_width] max-md:items-start max-md:pt-6">
        <p className="capitalize text-[28px] max-lg:text-[20px] font-semibold">
          {user.name}
        </p>
        <div className="flex gap-4 items-center max-md:hidden">
          <RequestChange />
          <SettingButton />
        </div>
        <div className="flex gap-4 items-center md:hidden">
          <EllipsisVertical className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
