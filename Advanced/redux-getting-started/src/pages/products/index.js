import { useSelector, useDispatch } from 'react-redux'
import ProductItem from './components/ProductItem'

export default function Products(){
    const products = useSelector((state) => state.products.products)
    return (
        <div>
            <p> This is products screen.</p>
            <ul>
            {
                products ? products.map(p => <ProductItem product={p} key={p.id} />) : null
            }
            </ul>
        </div>
    )
}