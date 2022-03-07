import { Category } from "./Product";

export interface FilterCategoryProps {
    categories: Array<Category>;
    setCategoryFilter: Function;
}

export default function FilterCategory({ categories, setCategoryFilter }: FilterCategoryProps) {
    
    function setCategoryFilterHandle(event: any) {
        const categoryId = event.target.value;
        setCategoryFilter(categories.filter(category => category.id == categoryId)[0]);
    }
    
    return (
        <div className="select">
            <div className="w-50 mt-4">
                <p>Category: </p>
                <select className="form-select mb-3" onChange={setCategoryFilterHandle}>
                    { categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >{category.name}</option>
                    ) ) }
                </select>
            </div>
        </div>
    )
}