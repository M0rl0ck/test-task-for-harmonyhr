import { User } from "@/store";
import { RequestChange } from "./RequestChange";
import { SettingButton } from "./SettingButton";

interface Props {
  user: User;
}
export function MyInfoHeder({ user }: Props) {
  return (
    <div className="bg-bgBlue pl-[--aside_width] h-[200px]">
      <div className="flex justify-between items-center h-full max-w-[--my_info_content_width]">
        <p className="capitalize text-3xl font-semibold">{user.name}</p>
        <div className="flex gap-4 items-center">
          <RequestChange />
          <SettingButton />
        </div>
      </div>
    </div>
  );
}
