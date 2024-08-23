import  { useReducer } from 'react';
import basket from './assets/basketball-7121617_1280.jpg'
import cricket from './assets/istockphoto-1144289750-612x612.jpg'
import golf from './assets/golf-3216250_1280.jpg'
import volley from './assets/volleyball-520093_1280.jpg'
import foot from './assets/soccer-3471402_1280.jpg'
import hand from './assets/ball-1930198_1280.jpg'


const initialState = {count:0};


const operation =(state,action)=>{
    switch(action.type){
        case 'add':
            return {count:state.count +1};
        case 'sub':
            return {count:Math.max(0, state.count - 1) };
        default:
            throw new Error();        
    }
}

const Product = () => {
    const [state,dispatch] = useReducer(operation,initialState);
    return (
        <div>
            <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
                <div className="card shadow-sm">
                <img src={hand} alt="" />
                <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" onClick={()=>dispatch({type:'add'})} className="btn btn-sm btn-outline-secondary">Add</button>
                        <button type="button" onClick={()=>dispatch({type:'sub'})} className="btn btn-sm btn-outline-secondary">Remove</button>
                    </div>
                    <p>Count:{state.count}</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                <img src={volley} alt="" />
                <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <button type="button" onClick={()=>dispatch({type:'add'})} className="btn btn-sm btn-outline-secondary">Add</button>
                    <button type="button" onClick={()=>dispatch({type:'sub'})} className="btn btn-sm btn-outline-secondary">Remove</button>
                    </div>
                    <p>Count:{state.count}</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                <img src={golf} alt="" />
                <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" onClick={()=>dispatch({type:'add'})} className="btn btn-sm btn-outline-secondary">Add</button>
                        <button type="button" onClick={()=>dispatch({type:'sub'})} className="btn btn-sm btn-outline-secondary">Remove</button>
                    </div>
                    <p>Count:{state.count}</p>
                    </div>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="card shadow-sm">
                <img src={cricket} alt="" />
                <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <button type="button" onClick={()=>dispatch({type:'add'})} className="btn btn-sm btn-outline-secondary">Add</button>
                    <button type="button" onClick={()=>dispatch({type:'sub'})} className="btn btn-sm btn-outline-secondary">Remove</button>
                    </div>
                    <p>Count:{state.count}</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                    <img src={basket} alt="" />
                <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <button type="button" onClick={()=>dispatch({type:'add'})} className="btn btn-sm btn-outline-secondary">Add</button>
                    <button type="button" onClick={()=>dispatch({type:'sub'})} className="btn btn-sm btn-outline-secondary">Remove</button>
                    </div>
                    <p>Count:{state.count}</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                <img src={foot} alt="" />
                <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <button type="button" onClick={()=>dispatch({type:'add'})} className="btn btn-sm btn-outline-secondary">Add</button>
                    <button type="button" onClick={()=>dispatch({type:'sub'})} className="btn btn-sm btn-outline-secondary">Remove</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
            {/* <p>Count:{state.count}</p>
            <div></div>
            <button onClick={()=>dispatch({type:'add'})}>
                add
            </button>
            <button onClick={()=>dispatch({type:'sub'})}>
                remove
            </button> */}
        </div>
    )
}

export default Product

