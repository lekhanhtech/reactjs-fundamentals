export default function ProductItem({ product, size = 100}) {
    return (
        <div>
            <img 
                src={ product.preview }
                width={size}
                hight={size}
                alt={product.name}
            />
            <span>{product.name}</span>
        </div>
    )
}