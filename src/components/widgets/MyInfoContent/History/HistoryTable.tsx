import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type IData = {
  date: string;
  description: string;
  usedDays: string;
  paymentMethod: string;
  balance: string;
};

const data: IData[] = [
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: "",
    paymentMethod: "3.00",
    balance: "3.00",
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: "-6",
    paymentMethod: "",
    balance: "3.00",
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: "",
    paymentMethod: "3.00",
    balance: "3.00",
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: "",
    paymentMethod: "3.00",
    balance: "3.00",
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: "-6",
    paymentMethod: "",
    balance: "3.00",
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: "",
    paymentMethod: "3.00",
    balance: "3.00",
  },
];

export function HistoryTable() {
  return (
    <Table className="w-[1015px]">
      <TableHeader className="bg-bgBlue">
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Used Days (-)</TableHead>
          <TableHead>Earned Days (+)</TableHead>
          <TableHead>Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((el, index) => (
          <TableRow key={index} className="border-b-2 border-b-dividerColor">
            <TableCell className="font-medium">{el.date}</TableCell>
            <TableCell>{el.description}</TableCell>
            <TableCell>{el.usedDays}</TableCell>
            <TableCell>{el.paymentMethod}</TableCell>
            <TableCell>{el.balance}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
