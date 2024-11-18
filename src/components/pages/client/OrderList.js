import { useEffect, useState } from 'react';
import './OrderList.css';
import { toast } from 'react-toastify';
import axios from 'axios';

const OrderList = ({ orderList, setOrderList, setShowModal }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [freeTable, setFreeTable] = useState('');

    useEffect(() => {
        const findAvailabelTable = async () => {
            try {
                const res = await axios.get('http://localhost:3000/listTable');
                if (res.data && res.data.length > 0) {
                    const isTabelAvailable = res.data.find((item) => item?.isAvailability === true);
                    isTabelAvailable ? setFreeTable(isTabelAvailable?.id) : toast.error("Không còn bàn trống! :(");
                }
            } catch (error) {
                console.error("Error fetching table list:", error);
            }
        };
        findAvailabelTable();
    }, []);

    const handleCheckboxChange = (event, itemId) => {
        if (event.target.checked) {
            setSelectedItems((prevSelected) => [...prevSelected, itemId]);
        } else {
            setSelectedItems((prevSelected) => prevSelected.filter((id) => id !== itemId));
        }
    };

    const handleDeleteOrder = () => {
        if (selectedItems && selectedItems.length > 0) {
            const updatedOrderList = orderList.filter((item) => !selectedItems.includes(item.id));
            setOrderList(updatedOrderList);
            setSelectedItems([]);
            toast.success("Delete success");
        } else {
            toast.error("No item selected to delete");
        }
    };

    const handleCallOrder = async () => {
        try {
            await toast.promise(
                axios.patch(`http://localhost:3000/listTable/${freeTable}`, {
                    isAvailability: false,
                    food: orderList,
                }),
                {
                    pending: 'Đang tiến hành gọi món...',
                    success: 'Gọi món thành công 👌',
                    error: 'Gọi món thất bại 🤯',
                }
            );
        } catch (error) {
            toast.error('Đã xảy ra lỗi khi gọi món!');
        }
    };

    return (
        <>
            <div className="order-list-container">
                <div className="orderlist-table">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input disabled id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-all" className="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Tên món
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Số lượng
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Giá
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Tổng tiền
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderList && orderList.length > 0
                                    ?
                                    orderList.map((orderItem, index) => (
                                        <tr key={orderItem.name} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4">
                                                <div className="flex items-center">
                                                    <input
                                                        onChange={(event) => handleCheckboxChange(event, orderItem.id)}
                                                        id={`${orderItem.name}-${index}`}
                                                        type="checkbox"
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label for={`${orderItem.name}-${index}`} className="sr-only">checkbox</label>
                                                </div>
                                            </td>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {orderItem.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {orderItem.quantity}
                                            </td>
                                            <td className="px-6 py-4">
                                                {orderItem.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                                            </td>
                                            <td className="px-6 py-4">
                                                {orderItem.total.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                                            </td>
                                        </tr>
                                    ))
                                    :
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td colSpan={5} className="px-6 py-4">
                                            Không có sản phẩm nào trong danh sách Order!
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="orderlist-action">
                    <button onClick={handleDeleteOrder} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Xóa món</button>
                    <button onClick={handleCallOrder} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Gọi món</button>
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Gọi phục vụ</button>
                    <button onClick={() => setShowModal(true)} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Phản hồi</button>
                </div>
            </div>
        </>
    )
}

export default OrderList;