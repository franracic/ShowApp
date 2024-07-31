import { ReviewContext } from "@/components/feature/review/ReviewContext/ReviewContext";
import { ShowPicker } from "@/components/feature/show-picker/ShowPicker/ShowPicker";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { Box, Button, Tooltip, VStack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useContext } from "react";

interface ISidebarItem {
  label: string;
  href: string;
  containsNotification?: boolean;
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
    containsNotification: true,
  },
];

interface NavigationMenuProps {
  onSelect?: () => void;
}

export const NavigationMenu = ({ onSelect }: NavigationMenuProps) => {
  const pathname = usePathname();

  const hasNotification = useContext(ReviewContext).hasNotification;

  return (
    <VStack spacing={1} alignItems="stretch">
      {SIDEBAR_ITEMS.map(({ label, href, containsNotification }) => {
        const isActive = pathname === href;

        return (
          <Link key={href} href={href}>
            <Tooltip
              label={
                containsNotification && hasNotification ? "Review added" : ""
              }
            >
              <Button
                variant={"dark"}
                isActive={isActive}
                onClick={onSelect}
                position="relative"
              >
                {label}
                {containsNotification && hasNotification && (
                  <Box
                    as={CheckCircleIcon}
                    position="absolute"
                    top="0"
                    right="0"
                    color="yellow.500"
                  />
                )}
              </Button>
            </Tooltip>
          </Link>
        );
      })}
      <ShowPicker />
    </VStack>
  );
};
