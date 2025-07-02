import EcommerceMetricsComponent from "../../components/ecommerce/EcommerceMetrics";
import MonthlySalesChartComponent from "../../components/ecommerce/MonthlySalesChart";
import OutOfStock from "../../components/ecommerce/OutOfStock.tsx";
import PageMeta from "../../components/common/PageMeta";
import {memo, useEffect, useState} from "react";




const EcommerceMetrics = memo(EcommerceMetricsComponent)
// const MonthlyTarget = memo(MonthlyTargetComponent);
const MonthlySalesChart = memo(MonthlySalesChartComponent)

export default function Home() {

  const [allCustomerCount, setAllCustomerCount] = useState<any>()
  const [ordersSummary, setOrderSummary] = useState<any>()
  const [outOfStockItems, setOutOfStockItems] = useState<any>()
  const [mostSaleItemDetails, setMostSaleItemDetails] = useState<any>()


  useEffect(() => {
    //--------------dumy data
    setAllCustomerCount(20)
    setOrderSummary({
      orderCount: 50,
      orderTotal: 5000
    })
    setOutOfStockItems([
        {
            itemName: "Item 1",
            itemImageUrl: "https://via.placeholder.com/150"
        },
        {
            itemName: "Item 2",
            itemImageUrl: "https://via.placeholder.com/150"
        }
        ])
    setMostSaleItemDetails({
        itemName: "Most Sold Item",
        itemImageUrl: "https://via.placeholder.com/340"
    })
  }, []);

  return (
    <>
      <PageMeta
        title="dashbord"
        description="dashbord"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics customerCount={allCustomerCount} ordersCount={ordersSummary?.orderTotal}/>

          <MonthlySalesChart orderCount={ordersSummary?.orderCount}/>
        </div>


        <div className="col-span-12 xl:col-span-5">
          <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-gray-900 sm:px-6 sm:pt-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Most Sale Item
              </h3>
              <img
                  src={mostSaleItemDetails?.itemImageUrl}
                  alt=""
                  className="mt-4 w-[340px] mx-auto"
              />
            </div>
          </div>
        </div>


        {/*<div className="col-span-12">*/}
        {/*  <StatisticsChart />*/}
        {/*</div>*/}

        {/*<div className="col-span-12 xl:col-span-5">*/}
        {/*  <DemographicCard />*/}
        {/*</div>*/}

        <div className="col-span-12 xl:col-span-7">
          <OutOfStock allStockOutItems={outOfStockItems}/>
        </div>
      </div>
    </>
  );
}
