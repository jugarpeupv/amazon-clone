export const initialState = {
  basket: [
    // {
    //   id: "1123123",
    //   title:
    //     "kwmobile 5X Práctica protección Compatible con cámaras Apple iPhone 6 / 6S en Negro/Plata/Rosa Fucsia",
    //   rating: 3,
    //   price: 4.99,
    //   image:
    //     "https://images-na.ssl-images-amazon.com/images/I/51Zw8OVItTL._SR258,310_.jpg",
    // },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      // Logic for adding to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    // case "SINGING_OUT":
    //   let emptyBasket = [];
    //   return {
    //     ...state,
    //     basket: emptyBasket,
    //   };

    case "REMOVE_FROM_BASKET":
      // Logic for removin from the basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove produc (id:${action.id} as its not in the basket)`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};
