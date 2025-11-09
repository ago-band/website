import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";

interface NavigationContextType {
    sidebarVisible: boolean;
    setSidebarVisible: (visible: boolean) => void;
    isAnimating: boolean;
    setIsAnimating: (animating: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
    undefined
);

export function NavigationProvider({ children }: { children: ReactNode }) {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    return (
        <NavigationContext.Provider
            value={{
                sidebarVisible,
                setSidebarVisible,
                isAnimating,
                setIsAnimating,
            }}
        >
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    const context = useContext(NavigationContext);
    if (context === undefined) {
        throw new Error(
            "useNavigation must be used within a NavigationProvider"
        );
    }
    return context;
}
