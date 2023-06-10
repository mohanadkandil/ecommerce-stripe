type Params = {
    id: string
}

type SearchParams = {
    name: string, 
    description: string | null,
    unit_amount: number | null,
    image: string, 
    id: string
}

type SearchParamType = {
    params: Params,
    searchParams: SearchParams
}