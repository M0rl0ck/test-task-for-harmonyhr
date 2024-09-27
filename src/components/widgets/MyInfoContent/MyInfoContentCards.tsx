import { MyInfoContentCard } from "./MyInfoContentCard";

export function MyInfoContentCards() {
  return (
    <div className="w-full h-[187px] flex flex-col justify-between items-center pt-6">
      <div className="max-w-[888px] w-full h-[163px] overflow-hidden overflow-x-auto scrollbar">
        <div className="w-[888px] h-full flex justify-between">
          <MyInfoContentCard
            title="Sick"
            imageSrc="/cross.svg"
            value="3"
            description="Days Available"
            caption="Sick Full-Time"
            addition="1 day scheduled"
          />
          <MyInfoContentCard
            title="Annual Leave "
            imageSrc="/mountain.svg"
            value="10.3"
            description="Days Available"
            caption="Holiday Full-Time"
          />
          <MyInfoContentCard
            title="Comp/in Lieu Time"
            imageSrc="/text-clock.svg"
            value="0"
            description="Human Used(YTD)"
            caption="Comp/in Lieu Time Flexible Policy"
          />
        </div>
      </div>
    </div>
  );
}
