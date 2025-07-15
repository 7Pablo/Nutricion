// HamDropdown.jsx (Client component)
"use client";

import { Menu } from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import ToggleButton from "./ToggleButton";

export default function HamDropdown({ trans, lang }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ham-dropdown">
      <Menu.Root onOpenChange={(e) => setIsOpen(e.open)}>
        <Menu.Trigger asChild>
          <button className={`ham-dropdown__button ${isOpen ? "is-open" : ""}`}>
            <Image
              src="/icons/ham.svg"
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
                        <a href="#start">{trans.navbar.start}</a>
                    </Menu.Item>
                </div>
                <div className="ham-dropdown__item">
                    <Menu.Item>
                        <a href="#about">{trans.navbar.about}</a>
                    </Menu.Item>
                </div>
                <div className="ham-dropdown__item">
                    <Menu.Item>
                        <a href="#services">{trans.navbar.services}</a>
                    </Menu.Item>
                </div>
                <div className="ham-dropdown__item">
                    <Menu.Item>
                        <a href="#contact">{trans.navbar.contact}</a>
                    </Menu.Item>
                </div>
                <Menu.Item>
                    <ToggleButton lang={lang}/>
                </Menu.Item>
            </div>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </div>
  );
}
