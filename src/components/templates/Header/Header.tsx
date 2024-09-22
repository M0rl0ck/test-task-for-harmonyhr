import { SearchInput } from "@/components/components";
import { Navigation, SettingBlock } from "@/components/widgets";

export function Header() {
  return (
    <header className="flex items-start justify-between gap-2 min-h-[50px] px-8 pt-6 max-lg:px-6 max-lg:pt-0 max-lg:items-center">
      <div className="text-xl font-semibold">HarmonyHR</div>
      <Navigation />
      <SearchInput />
      <SettingBlock />
    </header>
  );
}
