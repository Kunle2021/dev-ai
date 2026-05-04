"use client";

import { X, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-12 z-40 flex h-[calc(100vh-3rem)] w-72 flex-col border-r border-border-default bg-bg-surface transition-transform duration-200 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between border-b border-border-default px-4 py-3">
        <span className="text-sm font-semibold text-text-primary">Projects</span>
        <button
          onClick={onClose}
          aria-label="Close sidebar"
          className="flex h-6 w-6 items-center justify-center rounded-xl text-text-muted transition-colors hover:bg-bg-elevated hover:text-text-primary"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <Tabs defaultValue="my-projects" className="flex flex-1 flex-col overflow-hidden">
        <TabsList className="mx-4 mt-3 w-auto">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent value="my-projects" className="flex-1 overflow-y-auto px-4 py-4">
          <p className="mt-8 text-center text-sm text-text-muted">No projects yet.</p>
        </TabsContent>
        <TabsContent value="shared" className="flex-1 overflow-y-auto px-4 py-4">
          <p className="mt-8 text-center text-sm text-text-muted">No shared projects.</p>
        </TabsContent>
      </Tabs>

      <div className="border-t border-border-default p-4">
        <Button className="w-full gap-2">
          <Plus className="h-5 w-5" />
          New Project
        </Button>
      </div>
    </aside>
  );
}
