import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { checkRole } from "./auth";

export const ProtectedRoute = ({ children, requiredRole }) => {
    const hasAccess = checkRole(requiredRole);

    if (!hasAccess) {
        // Lưu thông báo vào localStorage
        localStorage.setItem('accessDenied', 'Bạn không có quyền truy cập!');

        // Trì hoãn chuyển hướng
        setTimeout(() => {
            // Chuyển hướng bằng Navigate sau khi hiển thị thông báo
            toast.error(localStorage.getItem('accessDenied'), {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                theme: "light",
            });
        }, 1000); // Đợi 1 giây trước khi chuyển hướng

        // Trả về null để không render gì trong ProtectedRoute
        return <Navigate to="/" replace />;
    }

    return children; // Nếu có quyền, render children
};
