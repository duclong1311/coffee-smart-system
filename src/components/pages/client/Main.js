import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../partial/Header';
import Footer from '../../partial/Footer';
import { toast } from 'react-toastify';

export function Main() {
    useEffect(() => {
        const accessDeniedMessage = localStorage.getItem('accessDenied');

        if (accessDeniedMessage) {
            const hasShownMessage = sessionStorage.getItem('hasShownAccessDenied');

            if (!hasShownMessage) {
                toast.error(accessDeniedMessage, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    theme: "light",
                });

                // Đặt cờ trong sessionStorage để tránh lặp lại
                sessionStorage.setItem('hasShownAccessDenied', 'true');
            }

            // Xóa thông báo khỏi localStorage ngay sau khi kiểm tra
            localStorage.removeItem('accessDenied');
        }
    }, []);

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}
