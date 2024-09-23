import { MyInfoCard } from "./MyInfoCard";
import { CircleUser, Users } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const VISIBLE_PERSONS = 4;

export function DirectReports() {
  const persons = [
    "Shane",
    "Nathan",
    "Mitchell",
    "Philip",
    "Jasmine",
    "Sarah",
    "Kevin",
    "Sara",
  ];
  return (
    <MyInfoCard>
      <div className="flex flex-col gap-4">
        <p>Direct Reports</p>
        <div className="flex flex-col gap-2">
          {persons.slice(0, VISIBLE_PERSONS).map((person) => (
            <p className="flex gap-2 items-center" key={person}>
              <CircleUser className="w-4 h-4" /> {person}
            </p>
          ))}
          <Collapsible>
            <CollapsibleTrigger asChild>
              <p className="flex gap-2 items-center cursor-pointer hover:bg-gray-200">
                <Users className="w-4 h-4" />{" "}
                {`${persons.length - VISIBLE_PERSONS} More...`}
              </p>
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col gap-2 pt-2">
              {persons.slice(VISIBLE_PERSONS).map((person) => (
                <p className="flex gap-2 items-center" key={person}>
                  <CircleUser className="w-4 h-4" /> {person}
                </p>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </MyInfoCard>
  );
}
