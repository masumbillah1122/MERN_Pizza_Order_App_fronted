import React, { useEffect } from 'react';
import { pizzas } from '../../data/data';
import Pizza from '../pizza/Pizza';
import { useDispatch, useSelector } from 'react-redux';
import './pizzas.css';
import { getAllPizzas } from './../../actions/pizzaActions';
import getAllPizzasReducer from './../../reducers/pizzaReducer.js';

const Pizzas = () => {

  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  const {pizzas, loading, error} = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <div className="ps-container">
      <div className="ps-row">
        <div className="ps-col">
          <div className="ps-cards">
            {loading ? (
              <h2 className="loading">Loading...</h2>
            ) : error ? (
              <h2 className="error">Error...</h2>
            ) : (
              pizzas.map((pizza) => {
                return <Pizza pizza={pizza} key={pizza._id}/>;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pizzas