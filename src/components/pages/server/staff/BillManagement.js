import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Search from "./Search";
import { includes } from "lodash";
import Pagination from "./Pagination";
const itemsPerPage = 10;

const BillManagement = () => {

    const [billData, setBillData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchBillData = async () => {
            const res = await axios.get("http://localhost:3000/bills");
            setBillData(res.data);
        }
        fetchBillData();
    }, []);

    const filterBills = (bills, query) => {
        if (!query) return bills;

        const lowerCaseQuery = query.toLowerCase();

        return bills.filter((bill) => {
            const isDateMatch = bill.date.toLowerCase().includes(lowerCaseQuery);
            const isFoodMatch = bill.foods.some((food) =>
                food.name.toLowerCase().includes(lowerCaseQuery)
            );

            return isFoodMatch || isDateMatch;
        })
    };
    const filteredBills = useMemo(() => filterBills(billData, searchQuery), [billData, searchQuery]);

    const currentTableData = useMemo(() => {
        const startPageIndex = (currentPage - 1) * itemsPerPage;
        const endPageIndex = startPageIndex + itemsPerPage;
        return filteredBills.slice(startPageIndex, endPageIndex);
    }, [currentPage, filteredBills]);


    return (
        <>
            <div className="container p-1">
                <h1 className="text-center text-3xl font-bold mb-8">Hóa đơn</h1>
                <div className="flex justify-end gap-2">
                    <div className="mb-2">
                        <input
                            type="date"
                            className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm h-9 focus:outline-none focus:ring-2 focus:ring-amber-800 transition-all hover:ring-amber-600 text-gray-700"
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="search"
                            placeholder="Bạc xỉu,..."
                            className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm h-9 focus:outline-none focus:ring-2 focus:ring-amber-800 transition-all hover:ring-amber-600 text-gray-700"
                        />
                    </div>
                </div>


                <div className="w-full border-collapse border border-gray-400 z-0">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="py-3 px-6 font-semibold text-gray-800 border-b w-36">STT</th>
                                <th className="py-3 px-6 font-semibold text-gray-800 border-b">Time in</th>
                                <th className="py-3 px-6 font-semibold text-gray-800 border-b">Time out</th>
                                <th className="py-3 px-6 font-semibold text-gray-800 border-b">Date</th>
                                <th className="py-3 px-6 font-semibold text-gray-800 border-b">Order</th>
                                <th className="py-3 px-6 font-semibold text-gray-800 border-b">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentTableData && currentTableData.length > 0
                                && currentTableData.map((item, index) => (
                                    <tr className="hover:bg-gray-50" key={`${item}-${index}`}>
                                        <td className="py-4 px-6 border-b">
                                            {index + 1}
                                        </td>
                                        <td className="py-4 px-6 border-b text-gray-800">
                                            {item.timeIn}
                                        </td>
                                        <td className="py-4 px-6 border-b text-gray-800">
                                            {item.timeOut}
                                        </td>
                                        <td className="py-4 px-6 border-b text-gray-800">
                                            {item.date}
                                        </td>
                                        <td className="py-4 px-6 border-b text-gray-800">
                                            {item.foods.map((food) => (`${food.name} - ${food.quantity} `))}
                                        </td>
                                        <td className="py-4 px-6 border-b">
                                            {item.total.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <Pagination
                    currentPage={currentPage}
                    totalItems={filteredBills.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>
        </>
    )
}

export default BillManagement;