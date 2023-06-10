type CartItem = {
    name: string, 
    id: string,
    images?: string[],
    description?: string,
    unit_amount: number,
    quantity: number,
}

type CartState = {
    isOpen: boolean,
    cart: CartItem[]
}