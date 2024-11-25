import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { checkRole } from "./auth";
import { useEffect, useState } from "react";

export const ProtectedRoute = ({ children, requiredRole }) => {
    const hasAccess = checkRole(requiredRole);
    const navigate = useNavigate();
    const [redirecting, setRedirecting] = useState(false);
    const [toastShown, setToastShown] = useState(false);

    useEffect(() => {
        if (!hasAccess && !toastShown) {
            // Store the access denied message if not granted
            localStorage.setItem('accessDenied', 'Bạn không có quyền truy cập!');
            localStorage.setItem('accessDeniedShown', 'false');

            // Show the toast
            toast.error(localStorage.getItem('accessDenied'), {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                theme: "light",
            });

            setToastShown(true); // Mark toast as shown
        } else if (toastShown) {
            // Once toast has shown, wait before redirecting
            setTimeout(() => {
                // Clean up localStorage and proceed with redirection
                localStorage.removeItem('accessDenied');
                localStorage.removeItem('accessDeniedShown');
                setRedirecting(true); // Trigger redirection
            }, 3000); // Wait 3 seconds before redirecting
        }
    }, [hasAccess, toastShown]);

    useEffect(() => {
        if (redirecting) {
            navigate("/"); // Redirect to homepage after delay
        }
    }, [redirecting, navigate]);

    // If the user has access, render the children components
    if (hasAccess) {
        return children;
    }

    // Otherwise, return null or some other fallback (e.g., loading spinner)
    return null;
};
