import { HistoryHeader } from "./HistoryHeader";
import { HistoryTable } from "./HistoryTable";

export function History() {
  return (
    <div className="w-full">
      <HistoryHeader />
      <HistoryTable />
    </div>
  );
}
