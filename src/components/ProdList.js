import Box from './Box';

const ProdList = ({products, addToCart}) => {

    return (
                <div>
                        {
                            products.map(i => {
                                return (
                                    <Box key={i.id} data={i} addToCart={addToCart} />
                                )
                            })
                        }
                    </div>
    )
}

export default ProdList
