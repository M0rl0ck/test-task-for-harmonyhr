import { Navigation, SearchInput } from "@/components/components";
import { SettingBlock } from "@/components/widgets";

export function Header() {
  return (
    <header className="flex items-start justify-between px-8 pt-6">
      <div className="text-xl font-semibold">HarmonyHR</div>
      <Navigation />
      <SearchInput />
      <SettingBlock />
    </header>
  );
}
