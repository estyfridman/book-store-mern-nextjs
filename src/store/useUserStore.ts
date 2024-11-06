"use client"
import { create } from 'zustand';

interface StoreState {
    count: number;
    increase: () => void;
    decrease: () => void;
};

export const useStore = create<StoreState>((set) => ({
    count: 0,
    increase: () => set((store) => ({count: store.count + 1})),
    decrease: () => set((store) => ({count: store.count - 1})),
}));