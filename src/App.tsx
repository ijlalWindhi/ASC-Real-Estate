import React from "react";
import Routing from "./components/router/Routing";

export default function App() {
    type Theme = "light" | "dark";
    type ThemeContextType = {
        theme: Theme;
        changeTheme: (theme: Theme) => void;
    };
    return <Routing />;
}
