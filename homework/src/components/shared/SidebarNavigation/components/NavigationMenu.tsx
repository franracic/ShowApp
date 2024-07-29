import { Link } from "@chakra-ui/next-js";
import { Button, VStack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

interface ISidebarItem {
  label: string;
  href: string;
}

const SIDEBAR_ITEMS: Array<ISidebarItem> = [
  {
    label: "All shows",
    href: "/all-shows",
  },
  {
    label: "Top rated",
    href: "/top-rated",
  },
  {
    label: "Profile",
    href: "/profile",
  },
];

interface NavigationMenuProps {
  onSelect?: () => void;
}

export const NavigationMenu = ({ onSelect }: NavigationMenuProps) => {
  const pathname = usePathname();

  return (
    <VStack spacing={1} alignItems="stretch">
      {SIDEBAR_ITEMS.map(({ label, href }) => {
        const isActive = pathname === href;

        return (
          <Link key={href} href={href}>
            <Button variant={"dark"} isActive={isActive} onClick={onSelect}>
              {label}
            </Button>
          </Link>
        );
      })}
    </VStack>
  );
};
