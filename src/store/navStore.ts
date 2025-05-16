import { create } from 'zustand';
import { defaultStyles } from '../data/defaultStyles';
import { TStyles } from '../types/main';

interface IState {
    activeId: number;
    stack: number[];
    styles: TStyles;
    currentActiveSectionWidth: number;
    maxContentWidth: number;
    setStyles: (styles: TStyles) => void;
    setMaxContentWidth: (width: number) => void;
    setActiveId: (id: number) => void;
    setStack: (stack: number[]) => void;
    setCurrentActiveSection: (widht: number) => void;
}

export const useNavStore = create<IState>((set) => ({
    activeId: 1,
    stack: [1],
    styles: defaultStyles,
    currentActiveSectionWidth: 0,
    maxContentWidth: 0,
    setMaxContentWidth: (width) => set(() => ({ maxContentWidth: width })),
    setStyles: (styles) => set(() => ({ styles })),
    setActiveId: (id) => set(() => ({ activeId: id })),
    setStack: (stack) => set(() => ({ stack: stack })),
    setCurrentActiveSection: (width) => set(() => ({ currentActiveSectionWidth: width })),
}));
