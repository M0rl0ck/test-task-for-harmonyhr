import { MyInfoCard } from "./MyInfoCard";
import { Hash, Clock, Users, Globe, MapPin } from "lucide-react";

export function Block5() {
  return (
    <MyInfoCard>
      <div className="flex flex-col gap-2">
        <p className="flex gap-2 items-center">
          <Hash className="w-4 h-4" /> 5
        </p>
        <p className="flex gap-2 items-center">
          <Clock className="w-4 h-4" /> Full-Time
        </p>
        <p className="flex gap-2 items-center">
          <Users className="w-4 h-4" /> Operations
        </p>
        <p className="flex gap-2 items-center">
          <Globe className="w-4 h-4" /> Europe
        </p>
        <p className="flex gap-2 items-center">
          <MapPin className="w-4 h-4" /> London, UK
        </p>
      </div>
    </MyInfoCard>
  );
}
