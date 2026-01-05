import { SidebarProvider, Sidebar, SidebarInset, SidebarTrigger, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Home, LayoutGrid, Inbox, Calendar, History, Settings } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import { CheckSquare } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
        <Sidebar>
            <SidebarContent className="p-4">
            <SidebarHeader className="p-0">
                <div className="flex items-center gap-2">
                    <CheckSquare className="h-8 w-8 text-primary" />
                    <span className="font-bold font-headline text-2xl text-foreground">Task Master</span>
                </div>
            </SidebarHeader>

            <SidebarMenu className="mt-8">
                <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Home">
                        <Link href="/"><Home /></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="My Tasks" isActive>
                        <Link href="/dashboard"><LayoutGrid /></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Inbox">
                        <Link href="#"><Inbox /></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Calendar">
                        <Link href="#"><Calendar /></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="History">
                        <Link href="#"><History /></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>

             <SidebarMenu className="mt-auto">
                <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Settings">
                        <Link href="#"><Settings /></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <ThemeToggle />
                </SidebarMenuItem>
            </SidebarMenu>
            </SidebarContent>
        </Sidebar>
        <SidebarInset>
            <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
                <SidebarTrigger className="md:hidden" />
                <div className="w-full flex-1">
                    <h1 className="text-lg font-semibold md:text-2xl">My Tasks</h1>
                </div>
            </header>
            {children}
        </SidebarInset>
    </SidebarProvider>
  );
}
