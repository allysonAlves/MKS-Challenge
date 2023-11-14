export const currencyMask = (value: number) => 
`R$${Intl.NumberFormat('pt-br', { maximumSignificantDigits: 3 }).format(value)}`;