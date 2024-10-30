import LanguageSelector from "@/components/LanguageSelector";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 bg-main-green">
            <h1 className="text-2xl text-main-gold">Crush Lab Poker</h1>
            <nav>
                <ul className="flex">
                    <li className="mx-2"><a href="#" className="text-main-champagne">Home</a></li>
                    <li className="mx-2"><a href="#" className="text-main-champagne">About</a></li>
                    <li className="mx-2"><a href="#" className="text-main-champagne">Profile</a></li>
                    <li className="mx-2"><LanguageSelector /></li>
                </ul>
            </nav>
        </header>
    )
}