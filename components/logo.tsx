'use client'
import { useTheme } from "next-themes";
import logoText from '../public/n17lo.png'
import logoTextDark from '../public/n17logodark.png'

export default function LogoDark() {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            {!theme ? null : theme === 'dark' ? (
                <img
                    className="max-h-12 min-h-2"
                    src={logoText.src}
                    alt="OncoZero.AI Logo"
                />
            ) : (
                <img
                    className="max-h-12 min-h-2"
                    src={logoText.src}
                    alt="OncoZero.AI Logo"
                />
            )}
        </div>
    );
}