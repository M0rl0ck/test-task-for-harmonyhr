import { MyInfoCard } from "./MyInfoCard";
import { Phone, Mail, Linkedin, Facebook, Twitter } from "lucide-react";

export function Contacts() {
  return (
    <MyInfoCard>
      <div className="flex flex-col gap-4">
        <p className="flex gap-2 items-center">
          <Phone className="w-4 h-4" /> 07911 654321
        </p>
        <p className="flex gap-2 items-center">
          <Mail className="w-4 h-4" /> avd.yana@videorollnet
        </p>
        <p className="flex gap-4 items-center">
          <Linkedin className="w-4 h-4" />
          <Facebook className="w-4 h-4" />
          <Twitter className="w-4 h-4" />
        </p>
      </div>
    </MyInfoCard>
  );
}
