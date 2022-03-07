import { useEffect } from "react";
import Product, { Category, ProductProps } from "./Product";

export interface ProductsProps {
    products: Array<ProductProps>;
    filterCategory: Category;
}

export function Products({ products, filterCategory }: ProductsProps) {

    useEffect(() => {
    }, [filterCategory]);
    

    let productDisplay: Array<ProductProps> = products;
    if (filterCategory.id != "0") {
        productDisplay = productDisplay.filter(product => product.category.id == filterCategory.id);
    }

    return(
        <div className="block">
            {
                productDisplay.map(product => ( 
                    <Product key={product.id} product={product}/> 
                ))
            }
        </div>
    );
}