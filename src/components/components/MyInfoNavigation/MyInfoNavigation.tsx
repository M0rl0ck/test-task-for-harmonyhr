import { MY_INFO_NAVIGATION_ITEMS, MY_INFO_ROUTES } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const linkClass =
  "flex justify-center items-center text-sm text-nowrap leading-4 hover:bg-sky-600 duration-500 w-[90px] h-[49px] rounded-t-[--radius]";

const activeLinkClass = cn(linkClass, "bg-bgGray");

export function MyInfoNavigation() {
  const pathname = usePathname();
  return (
    <nav className="overflow-x-auto mb-[5px] max-[1320px]:hover:mb-0 scrollbar w-full max-w-[1046px]">
      <ul className="w-[1046px]  flex justify-between gap-4">
        {MY_INFO_NAVIGATION_ITEMS.map((item) => (
          <li key={item}>
            <Link
              className={
                MY_INFO_ROUTES[item] === pathname ? activeLinkClass : linkClass
              }
              href={MY_INFO_ROUTES[item]}
            >
              {item}
            </Link>
          </li>
        ))}
        <div className={linkClass}>
          More <ChevronDown className="w-4 h-4" />
        </div>
      </ul>
    </nav>
  );
}
