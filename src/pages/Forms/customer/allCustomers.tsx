import PageMeta from "../../../components/common/PageMeta.tsx";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb.tsx";
import ComponentCard from "../../../components/common/ComponentCard.tsx";
import AllCustomersTable from "../../../components/tables/BasicTables/AllCustomersTable.tsx";
import { useEffect, useState, useMemo } from "react";

const dummyCustomers: any = [
    {
        id: 1,
        customerName: "Alice Johnson",
        customerAddress: "123 Maple Street",
        customerEmail: "alice.johnson@example.com",
        customerBirthDate: "1990-06-15",
        customerImageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=40&q=80",
    },
    {
        id: 2,
        customerName: "Bob Smith",
        customerAddress: "456 Oak Avenue",
        customerEmail: "bob.smith@example.com",
        customerBirthDate: "1985-12-05",
        customerImageUrl: "https://images.unsplash.com/photo-1508214751195-fd3a67d95384?auto=format&fit=crop&w=40&q=80",
    },
    {
        id: 3,
        customerName: "Carla Gomez",
        customerAddress: "789 Pine Road",
        customerEmail: "carla.gomez@example.com",
        customerBirthDate: "1992-03-22",
        customerImageUrl: "https://images.unsplash.com/photo-1508214751197-91f65e83aeb7?auto=format&fit=crop&w=40&q=80",
    },
];

export default function AllCustomers() {
    const [allCustomers, setAllCustomers] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setAllCustomers(dummyCustomers);
    }, []);

    // Filter customers by name, email or address (case-insensitive)
    const filteredCustomers = useMemo(() => {
        if (!searchTerm) return allCustomers;

        return allCustomers.filter((customer) => {
            const term = searchTerm.toLowerCase();
            return (
                customer.customerName.toLowerCase().includes(term) ||
                customer.customerEmail.toLowerCase().includes(term) ||
                customer.customerAddress.toLowerCase().includes(term)
            );
        });
    }, [allCustomers, searchTerm]);

    return (
        <>
            <PageMeta title="customer" description="allCustomer" />
            <PageBreadcrumb pageTitle="Warehouse" />

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 h-screen w-full p-4">
                <div className="space-y-6 col-span-2">
                    <ComponentCard title="All Customers">
                        {/* Search input box - aligned right */}
                        <div className="flex justify-end mb-4">
                            <input
                                type="text"
                                placeholder="Search customers..."
                                className="border rounded px-3 py-1 w-64 focus:outline-none focus:ring focus:border-blue-300"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Pass filtered customers to table */}
                        <AllCustomersTable allCustomers={filteredCustomers} />
                    </ComponentCard>
                </div>
            </div>
        </>
    );
}
