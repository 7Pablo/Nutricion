// ToggleButton.js (Client component)
'use client';

import { usePathname, useRouter } from "next/navigation";
import { Switch } from "@chakra-ui/react"
import { useState } from "react";

export default function ToggleButton({lang}) {
    const pathname = usePathname();
    const router = useRouter();

    // State
    const [isSwitchChecked, setIsSwitchChecked] = useState(lang === "en");

    const handleToggle = (event) => {
        const willBeEnglish = event.checked;
        setIsSwitchChecked(willBeEnglish);
        setTimeout(() => {
            const newLang = willBeEnglish ? "en" : "es";
            const newHref = pathname.replace(`/${lang}`, `/${newLang}`);
            router.push(newHref);
        }, 200);
    };

    return (
        <div className="toggle-button">
            <p>ES</p>
            <Switch.Root
                checked={isSwitchChecked}
                onCheckedChange={handleToggle}
            >
                <Switch.HiddenInput />
                <Switch.Control />
            </Switch.Root>
            <p>EN</p>
        </div>
    );
}