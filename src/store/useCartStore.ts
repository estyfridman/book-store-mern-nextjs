"use client"
import { create } from 'zustand';

export interface ICartItem {
    bookId: string; 
    quantity: number;
    price: number;
    title: string
};

interface ICartState {
    items: ICartItem[];
    addToCart: (bookId: string, price: number, title: string) => void;
    removeFromCart: (bookId: string) => void;
    increaseQuantity: (bookId: string) => void;
    decreaseQuantity: (bookId: string) => void;
};

export const useCartStore = create<ICartState>((set) => ({
    items: [],
    addToCart: (bookId: string, price: number, title: string ) =>
      set((state) => ({
        items: [...state.items, { bookId, quantity: 1, price, title }],
      })),
    removeFromCart: (bookId: string) =>
      set((state) => ({
        items: state.items.filter((item) => item.bookId !== bookId),
      })),
    increaseQuantity: (bookId: string) =>
      set((state) => ({
        items: state.items.map((item) =>
          item.bookId === bookId ? { ...item, quantity: item.quantity + 1 } : item
        ),
      })),
    decreaseQuantity: (bookId: string) =>
      set((state) => ({
        items: state.items
          .filter((item) => item.bookId === bookId && item.quantity > 1)
          .map((item) => ({ ...item, quantity: item.quantity - 1 })),
      })),
  }));