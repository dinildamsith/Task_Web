import PageMeta from "../../../components/common/PageMeta.tsx";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb.tsx";
import ComponentCard from "../../../components/common/ComponentCard.tsx";
import AllOrdersTable from "../../../components/tables/BasicTables/allOrdersTable.tsx";
import {useEffect, useState} from "react";

const dummyOrders = [
    {
        id: 1,
        _id: "ORD1001",
        orderDate: "2025-06-20T14:23:00Z",
        customerName: "Alice Johnson",
        orderItems: [
            { itemName: "Red Apple", itemPrice: 1, buyQty: 5 },
            { itemName: "Banana", itemPrice: 0.5, buyQty: 10 },
        ],
        orderTotal: 10,
    },
    {
        id: 2,
        _id: "ORD1002",
        orderDate: "2025-06-21T09:15:00Z",
        customerName: "Bob Smith",
        orderItems: [
            { itemName: "Orange Juice", itemPrice: 3, buyQty: 2 },
            { itemName: "Green Grapes", itemPrice: 2, buyQty: 4 },
        ],
        orderTotal: 14,
    },
    {
        id: 3,
        _id: "ORD1003",
        orderDate: "2025-06-22T16:45:00Z",
        customerName: "Carla Gomez",
        orderItems: [
            { itemName: "Classic T-Shirt", itemPrice: 15, buyQty: 1 },
        ],
        orderTotal: 15,
    },
];



export default function AllOrders() {

    const [allOrders, setAllOrders] = useState<any>()

    useEffect(() => {
        setAllOrders(dummyOrders);
    }, []);


    return (
        <>
            <PageMeta
                title="all-orders"
                description="all-orders"
            />
            <PageBreadcrumb pageTitle="Order History"/>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 h-screen w-full p-4">
                <div className="space-y-6 col-span-2">
                    <ComponentCard title="All Orders">
                        <AllOrdersTable allOrders={allOrders}/>
                    </ComponentCard>
                </div>
            </div>

        </>
    );
}