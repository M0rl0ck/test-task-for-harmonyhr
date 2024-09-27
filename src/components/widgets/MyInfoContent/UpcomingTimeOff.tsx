import { Clock } from "lucide-react";
import Image from "next/image";

export function UpcomingTimeOff() {
  return (
    <div className="text-sm leading-4 w-full h-[229px]">
      <p className="text-[hsl(210_57%_29%)] flex gap-2 mr-auto border-b-2 border-b-dividerColor pb-4 pt-6">
        <Clock className="w-4 h-4 text-black" /> Upcoming Time Off
      </p>

      <div className="w-full h-[86px] py-6 flex justify-start gap-[14px] items-center border-b-2 border-b-dividerColor">
        <div className="w-[30px] h-[30px] relative">
          <Image src="/cross.svg" alt="time-off" fill />
        </div>

        <div className="flex flex-col">
          <p>Jan 27</p>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[hsl(209_42%_19%)]"></div>
            <p>1 day of Sick</p>
          </div>
        </div>
      </div>

      <div className="w-full h-[86px] py-6 flex justify-start gap-[14px] items-center border-b-2 border-b-dividerColor">
        <div className="w-[30px] h-[30px] relative">
          <Image src="/pig.svg" alt="time-off" fill />
        </div>
        <div className="flex flex-col">
          <p>Jul 4</p>
          <p>Independence Day</p>
        </div>
      </div>
    </div>
  );
}

//
