import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            cart: [],
            isOpen: false,
        }),
        {name: "cart-store"}
    )
)
        