import FoodType from "./FoodType";
import OrderList from "./OrderList";
import './DisplayMenu.css';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalFeedback from "./ModalFeedback";

const DisplayMenu = () => {
    const [orderList, setOrderList] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const addToOrder = (item) => {
        const existingItem = orderList.find(orderItem => orderItem.name === item.name);
        if (existingItem) {
            setOrderList(orderList.map(orderItem =>
                orderItem.name === item.name
                    ? { ...orderItem, quantity: orderItem.quantity + 1, total: orderItem.total + item.price }
                    : orderItem
            ));
        } else {
            setOrderList([...orderList, { ...item, quantity: 1, total: item.price }]);
        }
    };

    return (
        <>
            <div className="menu-container">
                <div className="left-container">
                    <FoodType
                        addToOrder={addToOrder}
                    />
                </div>
                <div className="right-container">
                    <OrderList
                        orderList={orderList}
                        setOrderList={setOrderList}
                        setShowModal={setShowModal}
                    />
                </div>
            </div>
            <ModalFeedback
                showModal={showModal}
                setShowModal={setShowModal}
            />

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                theme="light"
            />
        </>
    )
}

export default DisplayMenu;