import  { useReducer } from 'react';
import basket from './assets/basketball-7121617_1280.jpg'
import cricket from './assets/istockphoto-1144289750-612x612.jpg'
import golf from './assets/golf-3216250_1280.jpg'
import volley from './assets/volleyball-520093_1280.jpg'
import foot from './assets/soccer-3471402_1280.jpg'
import hand from './assets/ball-1930198_1280.jpg'



const initialState = [
    { id: 1, name: 'Handball', count: 0, image: hand },
    { id: 2, name: 'Volleyball', count: 0, image: volley },
    { id: 3, name: 'Golfball', count: 0, image: golf },
    { id: 4, name: 'Cricketball', count: 0, image: cricket },
    { id: 5, name: 'Basketball', count: 0, image: basket },
    { id: 6, name: 'Football', count: 0, image: foot },
];

const operation = (state, action) => {
    switch (action.type) {
    case 'add':
        return state.map((product) =>
        product.id === action.id ? { ...product, count: product.count + 1 } : product
        );
    case 'sub':
        return state.map((product) =>
        product.id === action.id ? { ...product, count: Math.max(0, product.count - 1) } : product
        );
    default:
        throw new Error();
    }
};

const Product = () => {
    const [state,dispatch] = useReducer(operation,initialState);
    return (
        <div>
        <div className="container">
            <h2 className="text-center m-5">Shopping Cart Landing Page</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {state.map((product) => (
                <div className="col" key={product.id}>
                    <div className="card shadow-sm">
                    <img src={product.image} alt={product.name} className="img-fluid img-responsive" />
                    <div className="card-body">
                        <p className="card-text">{product.name}</p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn">
                            <button
                            type="button"
                            onClick={() => dispatch({ type: 'add', id: product.id })}
                            className="btn m-2 btn-outline-success"
                            >
                            Add
                            </button>
                            <button
                            type="button"
                            onClick={() => dispatch({ type: 'sub', id: product.id })}
                            className="btn m-2 btn-outline-danger"
                            >
                            Remove
                            </button>
                        </div>
                        <p>Count: {product.count}</p>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Product

