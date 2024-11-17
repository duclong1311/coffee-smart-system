// utils/auth.js
export const checkRole = (requiredRole) => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user && user.role === requiredRole;
};
