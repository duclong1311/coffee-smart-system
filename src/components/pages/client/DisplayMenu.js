import FoodType from "./FoodType";
import OrderList from "./OrderList";
import './DisplayMenu.css';

const DisplayMenu = () => {
    return (
        <>
            <div className="menu-container">
                <div className="left-container">
                    <FoodType />
                </div>
                <div className="right-container">
                    <OrderList />
                </div>
            </div>
        </>
    )
}

export default DisplayMenu;