import { ROUTES_PATH } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationKeys = keyof typeof ROUTES_PATH;
const navigationItems: NavigationKeys[] = [
  "Home",
  "My Info",
  "People",
  "Hiring",
  "Reports",
  "Files",
];

const linkClass =
  "text-lg hover:bg-sky-600 duration-500 p-4 block rounded-t-[--radius]";

const activeClass = cn(linkClass, "bg-blue-200");

export function Navigation() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex">
        {navigationItems.map((item) => (
          <li key={item}>
            <Link
              className={
                ROUTES_PATH[item] === pathname ? activeClass : linkClass
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
