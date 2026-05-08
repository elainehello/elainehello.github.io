import React from 'react';

export interface WindowInstance {
    id: string;
    title: string;
    component: React.ComponentType;
    isOpen: boolean;
    zIndex: number;
}

export interface WindowState {
    windows: WindowInstance[];
    activeWindowId: string | null;
}
