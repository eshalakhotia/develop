import React, {useState} from 'react';
import ProdList from './ProdList';

const Filtering = ({products, sortProducts, addToCart}) =>  {

    const [element, setEl] = useState('Select');

    const setL = (e) => {
        setEl(e.target.value);
        sortProducts(e.target.value);
    }
    
    return (
        <div>
            <div >
                <h3>Clothing Products and Accessories</h3>
                <div>
                    Sort by Price:
                    <select element={element} onChange={setL}>
                        <option >Select</option>
                        <option >Lowest to Highest</option>
                        <option >Highest to Lowest</option>
                    </select>
                </div>
            </div>

            <ProdList products={products} addToCart={addToCart} />
            
        </div>
    )
}

export default Filtering;
