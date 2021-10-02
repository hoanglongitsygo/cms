export interface MenuItem {
  name: string;
  path: string;
  children?: MenuItem;
  expanded?: boolean;
}

export const MenuConfig: MenuItem[] = [
  {name: "Overview", path: "/overview"},
  {name: "Tickets", path: "/tickets"},
  {name: "Ideas", path: "/ideas"},
  {name: "Contacts", path: "/contacts"},
  {name: "Settings", path: "/settings"},
]
