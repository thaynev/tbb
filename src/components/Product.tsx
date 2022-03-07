export interface Category {
    id: string;
    name: string;
}

export interface ProductProps {
    id: string;
    name: string;
    shortDescription: string;
    images: Array<{
        alt: string;
        src: string;
    }>
    category: Category;
}

export interface ProductParams {
    product: ProductProps;
}

export default function Product({ product  }: ProductParams) {
    const { name, shortDescription, images, category } = product;
    function getPillColor(category: Category) {
        switch (category.name){
            case "Roll On": return "bg-info";
            case "Aerosol": return "bg-secondary";
            case "Stick": return "bg-danger";
            default: return "";
        }
    }
    return (
            <div className="card">
                <div>
                <img className="imgproduct" src={images[0].src} alt={images[0].alt}/>
                </div>
                <div className="cardint">
                    <p className="titleprod">{ name }</p>
                    <p className="descprod">{ shortDescription }</p>
                    <div className={`categ badge rounded-pill ${getPillColor(category)}`}>{ category.name }</div>
                </div>
            </div>
    )
}