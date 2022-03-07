import { useState } from "react";
import FilterCategory from "../components/FilterCategory";
import { Header } from "../components/Header";
import { Category } from "../components/Product";
import { Products } from "../components/products";
import data from "../data/data.json";

export function Home() {
    const categories: Array<Category> = [
        {
            name: "All",
            id: "0"
        },
        {
            name: "Aerosol",
            id: "-ea2b6a01-51da-5c1e-b8ee-2323231c93ae"
        },
        {
            name: "Stick",
            id: "-a412a678-3248-531d-a280-7259ace2c0e9"
        },
        {
            name: "Roll On",
            id: "-97da5e09-f0bc-5e40-8061-8a568757dfa4"
        }
    ];

    const [categoryFilter, setCategoryFilter] = useState<Category>(categories[0]);
    
    return (
        <div>
            <Header />
            <FilterCategory 
                categories={categories} 
                setCategoryFilter={setCategoryFilter} 
            />
            <Products products={data.data.nodes} filterCategory={categoryFilter}/>
        </div>
    )
}