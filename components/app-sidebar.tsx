'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Calendar,
  Timer,
  BarChart3,
  PieChart,
  Settings,
  User,
  LogOut,
  Moon,
  Sun,
  Utensils,
  Notebook,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';

// Menu items with categories
const menuItems = [
  {
    category: 'Time Management',
    items: [
      {
        title: 'Timer',
        url: '/timer',
        icon: Timer,
      },
      {
        title: 'Calendar',
        url: '/calendar',
        icon: Calendar,
      },
    ],
  },
  {
    category: 'Analytics',
    items: [
      {
        title: 'Reports',
        url: '/reports',
        icon: BarChart3,
      },
      {
        title: 'Dashboard',
        url: '/dashboard',
        icon: PieChart,
      },
      {
        title: 'Notes',
        url: '/notes',
        icon: Notebook,
      },
    ],
  },
  {
    category: 'Health',
    items: [
      {
        title: 'Nutrition',
        url: '/nutrition',
        icon: Utensils,
      },
    ],
  },
  {
    category: 'Account',
    items: [
      {
        title: 'Settings',
        url: '/settings',
        icon: Settings,
      },
      {
        title: 'Friends',
        url: '/friends',
        icon: User,
      },
    ],
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { theme: isDarkMode } = useTheme();

  if (!session) {
    return null;
  }

  return (
    <Sidebar>
      <SidebarHeader className="h-14 flex items-center border-b border-sidebar-border/50">
        <div className="flex items-center gap-3 px-4 w-full">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground font-semibold text-sm">
            L
          </div>
          <span className="text-base font-semibold text-sidebar-foreground">
            Lifestack
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3 py-6">
        {menuItems.map((section, index) => (
          <SidebarGroup key={section.category} className="mb-6">
            <SidebarGroupLabel className="text-xs font-medium text-sidebar-foreground/50 mb-3 px-3 tracking-wider">
              {section.category}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map(item => {
                  const isActive = pathname === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className={`transition-all duration-200 group rounded-lg h-9 ${
                          isActive
                            ? 'bg-sidebar-accent text-sidebar-foreground'
                            : 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50'
                        }`}
                      >
                        <Link href={item.url} className="relative">
                          <item.icon
                            className={`h-4 w-4 ${
                              isActive
                                ? 'text-sidebar-primary'
                                : 'group-hover:text-sidebar-primary/80'
                            }`}
                          />
                          <span className="text-sm">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
            {index < menuItems.length - 1 && (
              <SidebarSeparator className="my-4 bg-sidebar-border/30" />
            )}
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border/50 p-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-3 w-full justify-start px-3 py-2 h-auto hover:bg-sidebar-accent rounded-lg transition-colors"
            >
              <Avatar className="h-7 w-7">
                <AvatarImage src={session?.user?.image || ''} />
                <AvatarFallback className="bg-sidebar-primary/10 text-sidebar-primary text-xs font-semibold">
                  {session?.user.name
                    ?.split(' ')
                    .map(name => name[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start min-w-0">
                <span className="text-sm font-medium text-sidebar-foreground truncate">
                  {session?.user.name}
                </span>
                <span className="text-xs text-sidebar-foreground/50 truncate">
                  {session?.user.email}
                </span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <Link href={'/profile'}>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button
                onClick={() =>
                  document.documentElement.classList.toggle('dark')
                }
                className="flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                {isDarkMode === 'dark' ? (
                  <>
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="mr-2 h-4 w-4" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
