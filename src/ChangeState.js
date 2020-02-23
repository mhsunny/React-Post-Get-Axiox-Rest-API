import React, {useState} from 'react';

const ChangeState = () => {
    const [name, setName] = useState({
        product: "All Products"
    })
    const SortProduct = () =>{
        setName ({product: 'Sorted by Price'})
    }
    return (
        <div>

            <h2>{name.product}</h2>
             <button onClick={SortProduct}>SORT BY PRICE</button>
        </div>
    );
};

export default ChangeState;