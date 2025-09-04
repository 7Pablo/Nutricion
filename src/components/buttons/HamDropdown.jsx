"use client";

import { Menu } from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import ToggleButton from "./ToggleButton";
import { getAssetPath } from "@/utils/getAssetPath";

export default function HamDropdown({ trans, lang }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); 
    }
  };

  return (
    <div className="ham-dropdown">
      <Menu.Root onOpenChange={(e) => setIsOpen(e.open)}>
        <Menu.Trigger asChild>
          <button className={`ham-dropdown__button ${isOpen ? "is-open" : ""}`}>
            <Image
              src={getAssetPath("/icons/ham.svg")}
              alt="Menu icon"
              height={300}
              width={300}
            />
          </button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content className="ham-dropdown__content">
            <div>
              <div className="ham-dropdown__item">
                <Menu.Item>
                  <button onClick={(e) => scrollToSection(e, "#summary")}>
                    {trans.navbar.start}
                  </button>
                </Menu.Item>
              </div>
              <div className="ham-dropdown__item">
                <Menu.Item>
                  <button onClick={(e) => scrollToSection(e, "#about")}>
                    {trans.navbar.about}
                  </button>
                </Menu.Item>
              </div>
              <div className="ham-dropdown__item">
                <Menu.Item>
                  <button onClick={(e) => scrollToSection(e, "#services")}>
                    {trans.navbar.services}
                  </button>
                </Menu.Item>
              </div>
              <div className="ham-dropdown__item">
                <Menu.Item>
                  <button onClick={(e) => scrollToSection(e, "#contact")}>
                    {trans.navbar.contact}
                  </button>
                </Menu.Item>
              </div>
              <Menu.Item>
                <ToggleButton lang={lang} />
              </Menu.Item>
            </div>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </div>
  );
}
