import axios from 'axios';
import './FoodType.css'
import { useEffect, useState } from 'react';


const FoodType = ({ addToOrder }) => {
    const [menuData, setMenuData] = useState([]);
    const [originalMenuData, setOriginalMenuData] = useState([]);

    const fetchMenuData = async () => {
        const res = await axios.get('http://localhost:3000/menu');
        if (res && res.data.length > 0) {
            setMenuData(res.data);
            setOriginalMenuData(res.data);
        }
    }

    useEffect(() => {
        fetchMenuData();
    }, []);

    const filterMenu = (type) => {
        const filteredData = originalMenuData.filter((item) => item.category === type.toString());
        setMenuData(filteredData);
    };

    const resetMenu = () => {
        setMenuData(originalMenuData);
    };

    const handleClickAddToOrder = (item) => {
        addToOrder(item);
    }

    return (
        <>
            <div className="foodtype-container">
                <div className='left-container'>
                    <button onClick={() => filterMenu("coffee")} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Cà phê</button>
                    <button onClick={() => filterMenu("juice")} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Nước trái cây</button>
                    <button onClick={() => filterMenu("cake")} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Bánh</button>
                    <button onClick={() => filterMenu("alcohol")} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Đồ uống có cồn</button>
                    <button onClick={resetMenu} type="button" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Tất cả</button>
                </div>

                <div className='right-container'>
                    <div className='right-container-menu'>
                        {
                            menuData.length > 0 && menuData.map((item, index) => (
                                <div className='menu-card' key={`${item}-${index}`}>
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 food-item">
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
                    <div className='pagination'>
                        <nav aria-label="Page navigation example">
                            <ul class="inline-flex -space-x-px text-sm">
                                <li>
                                    <a href="/" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                                </li>
                                <li>
                                    <a href="/" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                </li>
                                <li>
                                    <a href="/" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodType;