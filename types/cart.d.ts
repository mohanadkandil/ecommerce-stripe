type AddCartType = {
    name: string, 
    id: string,
    image?: string[],
    description?: string,
    unit_amount: number | null,
    quantity?: number | 1,
}

type CartState = {
    isOpen: boolean,
    cart: CartItem[]
    toggleCard: () => void
    addProduct: (item: AddCartType) => void
    removeProduct: (item: AddCartType) => void
}