import PageMeta from "../../../components/common/PageMeta.tsx";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb.tsx";
import ComponentCard from "../../../components/common/ComponentCard.tsx";
import AllItemsTable from "../../../components/tables/BasicTables/AllItemsTable.tsx";
import {useEffect, useState} from "react";

const dummyData = [
    {
        _id: "1",
        itemCode: "ITEM001",
        itemImageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=40&q=80",
        itemDescription: "Red Apple",
        itemQuantity: 15,
        status: "Available",
        itemPrice: 1.2,
    },
    {
        _id: "2",
        itemCode: "ITEM002",
        itemImageUrl: "https://images.unsplash.com/photo-1506801310323-534be5e7e7a0?auto=format&fit=crop&w=40&q=80",
        itemDescription: "Fresh Banana",
        itemQuantity: 0,
        status: "Out of stock",
        itemPrice: 0.8,
    },
    {
        _id: "3",
        itemCode: "ITEM003",
        itemImageUrl: "https://images.unsplash.com/photo-1574226516831-e1dff420e42e?auto=format&fit=crop&w=40&q=80",
        itemDescription: "Orange Juice",
        itemQuantity: 4,
        status: "Low stock",
        itemPrice: 3.5,
    },
    {
        _id: "4",
        itemCode: "ITEM004",
        itemImageUrl: "https://images.unsplash.com/photo-1519181245277-cffeb31da2a4?auto=format&fit=crop&w=40&q=80",
        itemDescription: "Green Grapes",
        itemQuantity: 12,
        status: "Available",
        itemPrice: 2.1,
    }
];

export default function Warehouse() {

    const [allItems, setAllItems] = useState<any>([])



    useEffect(() => {
        // Simulate fetch or set dummy data on mount
        setAllItems(dummyData);
    }, []);


    return (
        <>
            <PageMeta
                title="warehouse"
                description="warehouse"
            />
            <PageBreadcrumb pageTitle="Warehouse"/>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 h-screen w-full p-4">
                <div className="space-y-6 col-span-2">
                    <ComponentCard title="All Items">
                        <AllItemsTable allItems={allItems}/>
                    </ComponentCard>
                </div>
            </div>

        </>
    );
}