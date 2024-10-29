import { ACTIONS_DESCRIPTION, BACKGROUND_RANGE_COLORS } from "@/constants/gloabal";
import { Range } from "../Chart/types";

interface ColorDescriptionProps {
    range: Range;
}

export default function ColorDescription ({ range }: ColorDescriptionProps) {

    function handleGetColorDescription(range: Range): JSX.Element[] {
        return Object.keys(range).map((action) => {
            const actionKey = action as keyof typeof ACTIONS_DESCRIPTION;
            return (
                <li key={action} className={`${BACKGROUND_RANGE_COLORS[action as keyof Range]} p-2 m-2 min-w-32 text-black`}>
                    <span>{ACTIONS_DESCRIPTION[actionKey]}</span>
                </li>
            )
        })
    }

    return (
        <section className="p-4 mt-40 text-center">
            <h2 className="text-lg text-main-gold">Descrição</h2>
            <ul className="text-sm">
                {handleGetColorDescription(range)}
            </ul>
        </section>
    )
}