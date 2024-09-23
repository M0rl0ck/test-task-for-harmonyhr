import { MyInfoCard } from "./MyInfoCard";

export function HireDate() {
  return (
    <MyInfoCard>
      <div className="flex flex-col gap-4">
        <p>Hire Date</p>
        <div className="flex flex-col gap-2">
          <p>Sep. 3,2020</p>
          <p>3y - 9m - 20d</p>
        </div>
      </div>
    </MyInfoCard>
  );
}
