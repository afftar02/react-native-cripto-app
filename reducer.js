export const initialState = {
    portfolio: {
        price: 0,
        lastPrice: 0,
        cryptoCurrencies: [],
    }
};

export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_CRYPTO':
            return {
                portfolio: {
                    lastPrice: state.portfolio.price,
                    price: Math.round((state.portfolio.price + action.payload.price) * 100) / 100,
                    cryptoCurrencies: [...state.portfolio.cryptoCurrencies,
                    {
                        id: action.payload.id,
                        price: action.payload.price,
                        rank: action.payload.rank,
                        name: action.payload.name,
                        symbol: action.payload.symbol,
                        changePercent24Hr: action.payload.changePercent24Hr,
                    }
                    ]
                }
            }
        case 'DELETE_CRYPTO':
            return {
                portfolio: {
                    lastPrice: state.portfolio.price,
                    price: Math.round((state.portfolio.price - state.portfolio.cryptoCurrencies.find((item) => item.id === action.payload.id).price) * 100) / 100,
                    cryptoCurrencies: state.portfolio.cryptoCurrencies.filter((item) => item.id !== action.payload.id),
                }
            }
        default:
            return state
    }
}