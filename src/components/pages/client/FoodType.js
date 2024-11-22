import axios from 'axios';
import './FoodType.css'
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import Pagination from '../server/staff/Pagination';
const itemsPerPage = 4;

const FoodType = ({ addToOrder }) => {
    const [menuData, setMenuData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [type, setType] = useState("");

    useEffect(() => {
        const fetchMenuData = async () => {
            const res = await axios.get('http://localhost:3000/menu');
            if (res && res.data.length > 0) {
                setMenuData(res.data);
            }
        }
        fetchMenuData();
    }, []);

    const filteredData = useMemo(() => {
        if (!type) return menuData;
        setCurrentPage(1);
        return menuData.filter((item) => item.category === type.toString());
    }, [type, menuData]);

    const currentTableData = useMemo(() => {
        const startPageIndex = (currentPage - 1) * itemsPerPage;
        const endPageIndex = startPageIndex + itemsPerPage;
        return filteredData.slice(startPageIndex, endPageIndex);
    }, [currentPage, filteredData, itemsPerPage]);

    const handleClickAddToOrder = (item) => {
        addToOrder(item);
        toast.success("Thêm thành công!")
    }

    return (
        <>
            <div className="foodtype-container">
                <div className='left-container'>
                    <button onClick={() => setType("coffee")} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Cà phê</button>
                    <button onClick={() => setType("juice")} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Nước trái cây</button>
                    <button onClick={() => setType("cake")} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Bánh</button>
                    <button onClick={() => setType("alcohol")} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Đồ uống có cồn</button>
                    <button onClick={() => setType("")} type="button" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Tất cả</button>
                </div>

                <div className='right-container'>
                    <div className='right-container-menu w-full'>
                        {
                            currentTableData.length > 0 && currentTableData.map((item, index) => (
                                <div className='menu-card' key={`${item}-${index}`}>
                                    <div className="food-item max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <img className="rounded-t-lg" src={item.img} alt="..." />
                                        <div className="p-5">
                                            <h5 className="item-name mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                            <p className="item-description mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                                            <button onClick={() => handleClickAddToOrder(item)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                {item.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                                                {/* <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg> */}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalItems={filteredData.length}
                        itemsPerPage={itemsPerPage}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
            </div>


        </>
    )
}

export default FoodType;