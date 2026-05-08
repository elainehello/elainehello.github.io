import React from 'react';
import { type WindowStatus } from '../theme/constants';

export interface WindowInstance {
    id: string;
    appId: string;
    title: string;
    component: React.ComponentType;
    isOpen: boolean;
    status: WindowStatus;
    zIndex: number;
    position: { x: number; y: number };
    size: { width: number; height: number };
}

export interface WindowState {
    windows: WindowInstance[];
    activeWindowId: string | null;
    nextZIndex: number;
}
