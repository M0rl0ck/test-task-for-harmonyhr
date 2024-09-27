import { MyInfoContentHeader } from "./MyInfoContentHeader";
import { MyInfoContentCards } from "./MyInfoContentCards";
import { UpcomingTimeOff } from "./UpcomingTimeOff";
import { History } from "./History";

export function MyInfoContentTimeOf() {
  return (
    <div className="w-full px-4 pb-20 max-md:pb-8">
      <MyInfoContentHeader />
      <MyInfoContentCards />
      <UpcomingTimeOff />
      <History />
    </div>
  );
}
