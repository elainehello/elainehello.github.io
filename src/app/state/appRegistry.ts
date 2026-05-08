import React from 'react';
import AboutApp from '../applications/about/AboutApp';
import ExplorerApp from '../applications/explorer/ExplorerApp';
import ProjectsApp from '../applications/projects/ProjectsApp';
import TerminalApp from '../applications/terminal/TerminalApp';

export interface AppDefinition {
    id: string;
    title: string;
    icon: string;
    component: React.ComponentType;
    defaultWidth: number;
    defaultHeight: number;
}

export const appRegistry: Record<string, AppDefinition> = {
    about: {
        id: 'about',
        title: 'About Me',
        icon: '🖥️',
        component: AboutApp,
        defaultWidth: 400,
        defaultHeight: 300
    },
    projects: {
        id: 'projects',
        title: 'Projects',
        icon: '📁',
        component: ProjectsApp,
        defaultWidth: 500,
        defaultHeight: 400
    },
    terminal: {
        id: 'terminal',
        title: 'Terminal',
        icon: '💻',
        component: TerminalApp,
        defaultWidth: 600,
        defaultHeight: 400
    },
    explorer: {
        id: 'explorer',
        title: 'Explorer',
        icon: '🗂️',
        component: ExplorerApp,
        defaultWidth: 700,
        defaultHeight: 500
    }
};

