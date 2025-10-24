import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, } from "@remix-run/react";
import styles from "./styles.css";
import { useEffect } from "react";

export const links = () => [
    { rel: "stylesheet", href: styles },
];

export function Layout({ children }) {
    return (_jsxs("html", { lang: "es", children: [_jsxs("head", { children: [_jsx("meta", { charSet: "utf-8" }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), _jsx("link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }), _jsx(Meta, {}), _jsx(Links, {})] }), _jsxs("body", { children: [children, _jsx(ScrollRestoration, {}), _jsx(Scripts, {})] })] }));
}

export default function App() {
    useEffect(() => {
        // Handle GitHub Pages 404 redirect
        if (sessionStorage.redirect) {
            const redirect = sessionStorage.redirect;
            delete sessionStorage.redirect;
            window.location.replace(redirect);
        }
    }, []);

    return _jsx(Outlet, {});
}
