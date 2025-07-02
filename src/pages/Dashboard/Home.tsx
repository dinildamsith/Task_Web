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
  // const [mostSaleItemDetails, setMostSaleItemDetails] = useState<any>()

    const dummyOrdersSummary = {
        orderCount: [5, 8, 6, 10, 12, 7, 15, 11, 9, 13, 14, 16],
        orderTotal: 5000,
    };


    useEffect(() => {
    //--------------dumy data
    setAllCustomerCount(20)
    setOrderSummary({
      orderCount: 50,
      orderTotal: 5000
    })
    setOutOfStockItems([
        {
            itemName: "Red Apple",
            itemImageUrl: "https://i5.walmartimages.com/seo/Fresh-Red-Delicious-Apple-Each_7320e63a-de46-4a16-9b8c-526e15219a12_3.e557c1ad9973e1f76f512b34950243a3.jpeg"
        },
        {
            itemName: "Fresh Banana",
            itemImageUrl: "https://m.media-amazon.com/images/I/31dke4F%2BcTL._SY300_SX300_QL70_FMwebp_.jpg"
        }
        ])
    // setMostSaleItemDetails({
    //     itemName: "Most Sold Item",
    //     itemImageUrl: "https://via.placeholder.com/340"
    // })
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

          <MonthlySalesChart orderCount={dummyOrdersSummary.orderCount}/>
        </div>


        <div className="col-span-12 xl:col-span-5">
          <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-gray-900 sm:px-6 sm:pt-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Most Sale Item
              </h3>
              <img
                  src='https://m.media-amazon.com/images/I/31dke4F%2BcTL._SY300_SX300_QL70_FMwebp_.jpg'
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
