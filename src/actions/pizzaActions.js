import axios from 'axios';

export const getAllPizzas = () => async dispatch => {
    dispatch({ type: 'GET_PIZZAS_REQUEST' });


    try {
        const res = await axios.get("/api/pizzas/getpizzas");
        dispatch({type: 'GET_PIZZAS_SUCCESS', payload: res.data});
    } catch (err) {
         dispatch({ type: "GET_PIZZAS_FAIL", payload: err });
    }

}

export const filterPizzas = (search, category) => async (dispatch) => {

    var filteredPizzas;

  dispatch({ type: "GET_PIZZAS_REQUEST" });

  try {
      const res = await axios.get("/api/pizzas/getpizzas");
      filteredPizzas = res.data.filter(pizza => pizza.name.toLowerCase().includes(search)); 

      if (category !== 'all') {
          filteredPizzas = res.data.filter(pizza =>
              pizza.category.toLowerCase() === category);
      };

        dispatch({ type: "GET_PIZZAS_SUCCESS", payload: filteredPizzas });
  } catch (err) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: err });
  }
};