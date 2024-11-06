'use client'

import { useCartStore } from "@/store/useCartStore"
import { ICartItem } from '@/store/useCartStore'

export default function Cart(){

    const { items } = useCartStore((state) => state);

    function calculateTotalPrice(items: ICartItem[]): number {
        return items.reduce((total, item) => {
          return total + (item.price * item.quantity);
        }, 0);
    };

    return (
        <>
        <div>
            {items.map((item) => (
                <div key={item.bookId}>
                    {item.title} - {item.price}
                </div>
            ))}
        </div>
        <div> TOTAL: {calculateTotalPrice(items)}</div>
        </>
    )
}