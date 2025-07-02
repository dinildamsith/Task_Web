import PageMeta from "../../../components/common/PageMeta.tsx";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb.tsx";
import ComponentCard from "../../../components/common/ComponentCard.tsx";
import AllItemsTable from "../../../components/tables/BasicTables/AllItemsTable.tsx";
import {useEffect, useState} from "react";

const dummyData = [
    {
        _id: "1",
        itemCode: "ITEM001",
        itemImageUrl: "https://i5.walmartimages.com/seo/Fresh-Red-Delicious-Apple-Each_7320e63a-de46-4a16-9b8c-526e15219a12_3.e557c1ad9973e1f76f512b34950243a3.jpeg",
        itemDescription: "Red Apple",
        itemQuantity: 15,
        status: "Available",
        itemPrice: 1.2,
    },
    {
        _id: "2",
        itemCode: "ITEM002",
        itemImageUrl: "https://m.media-amazon.com/images/I/31dke4F%2BcTL._SY300_SX300_QL70_FMwebp_.jpg",
        itemDescription: "Fresh Banana",
        itemQuantity: 0,
        status: "Out of stock",
        itemPrice: 0.8,
    },
    {
        _id: "3",
        itemCode: "ITEM003",
        itemImageUrl: "https://bakedbyclo.com/wp-content/uploads/2023/04/a-glass-of-vegan-orange-juice.jpg",
        itemDescription: "Orange Juice",
        itemQuantity: 4,
        status: "Low stock",
        itemPrice: 3.5,
    },
    {
        _id: "4",
        itemCode: "ITEM004",
        itemImageUrl: "https://erewhonappsftp.s3.us-west-2.amazonaws.com/images/233571000-1.png?date=2025-04-1600:56:58.372",
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