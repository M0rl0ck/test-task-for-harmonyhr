import { ROUTES_PATH, NAVIGATION_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  className?: string;
}

const linkClass =
  "text-lg text-nowrap leading-5 hover:bg-sky-600 duration-500 p-4 block rounded-t-[--radius]";

const activeLinkClass = cn(linkClass, "bg-bgBlue");

export function NavigationLinks({ className }: Props) {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={className ?? "flex"}>
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item}>
            <Link
              className={
                ROUTES_PATH[item] === pathname ? activeLinkClass : linkClass
              }
              href={ROUTES_PATH[item]}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
