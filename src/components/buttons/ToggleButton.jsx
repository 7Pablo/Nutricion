'use client';

import { getTranslations } from "@/locales/translations";
import { usePathname, useRouter } from "next/navigation";
import { Switch } from "@chakra-ui/react"

export default async function ToggleButton({lang}) {
    const pathname = usePathname();
    const router = useRouter();

    const isEnglish = lang === "en";
    const newLang = isEnglish ? "es" : "en";
    const newHref = pathname.replace(`/${lang}`, `/${newLang}`);

    const handleToggle = () => {
        router.push(newHref);
    };

    return (
        <div className="toggle-button">
            <p>ES</p>
            <Switch.Root
                isChecked={isEnglish}
                onCheckedChange={handleToggle}
                colorScheme="purple"
                size="md"
            >
                <Switch.HiddenInput />
                <Switch.Control />
            </Switch.Root>
            <p>EN</p>
        </div>
    );
}