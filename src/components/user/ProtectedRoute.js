import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { checkRole } from "./auth";

export const ProtectedRoute = ({ children, requiredRole }) => {
    const hasAccess = checkRole(requiredRole);

    if (!hasAccess) {
        // Kiểm tra xem đã hiển thị thông báo chưa trong sessionStorage
        if (!sessionStorage.getItem('accessDeniedShown')) {
            // Lưu thông báo vào sessionStorage
            sessionStorage.setItem('accessDenied', 'Bạn không có quyền truy cập!');

            // Trì hoãn chuyển hướng và hiển thị thông báo
            setTimeout(() => {
                toast.error(sessionStorage.getItem('accessDenied'), {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    theme: "light",
                });

                // Đánh dấu là đã hiển thị thông báo
                sessionStorage.setItem('accessDeniedShown', 'true');
            }, 1000); // Đợi 1 giây trước khi hiển thị thông báo
        }

        // Chuyển hướng về trang chính sau khi hiển thị thông báo
        return <Navigate to="/" replace />;
    }

    return children; // Nếu có quyền, render children
};
