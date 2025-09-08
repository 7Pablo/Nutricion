// ServiceCard.jsx (Server side)

import Image from "next/image";
import { MessagesSquare, Clock } from "lucide-react";
import { Dialog, Portal  } from "@chakra-ui/react"
import { getAssetPath } from "@/utils/getAssetPath";
import Button from "../buttons/Button";
import { useState } from "react";
import { smoothScroll } from '@/utils/smoothScroll';

export default function ServiceCard({ img, alt, title, body, bodyLong, time, format, button }) {
    // Dialog open and close state
    const [isOpen, setIsOpen] = useState(false);

    const handleScrollAndClose = () => {
        smoothScroll("summary", 1000);
        setIsOpen(false);
    };
    
    return (
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger>
                <div className="service-card">
                    <div className="service-card__image">
                        <Image
                            src={img}
                            alt={alt}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="service-card__text">
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </div>
                    <div className="service-card__bottom">
                        <div className="service-card__bottom--item">
                            <Clock size={24} color="#477FCA" strokeWidth={2} />
                            <p>{time}</p>
                        </div>
                        <div className="service-card__bottom--item">
                            <MessagesSquare size={24} color="#477FCA" strokeWidth={2} />
                            <p>{format}</p>
                        </div>
                    </div>
                </div>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <div 
                            className="service-pop__close"
                            onClick={() => setIsOpen(false)}
                        >
                            <Image
                                src={getAssetPath("/icons/close.svg")}
                                alt="x"
                                width={20}
                                height={20}
                                priority
                            />
                        </div>
                        <div className="service-pop">
                            <div className="service-pop__image">
                                <Image
                                    src={img}
                                    alt={alt}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className="service-pop__wrapper">
                                <div className="service-pop__content">
                                    <h2>{title}</h2>
                                    <div className="service-pop__info">
                                        <div className="service-pop__info--item">
                                            <Clock className="icon" size={30} color="#477FCA" strokeWidth={2} />
                                            <p>{time}</p>
                                        </div>
                                        <div className="service-pop__info--item">
                                            <MessagesSquare className="icon" size={30} color="#477FCA" strokeWidth={2} />
                                            <p>{format}</p>
                                        </div>
                                    </div>
                                    <div className="service-pop__content--text">
                                        <p>{bodyLong}</p>
                                    </div>
                                </div>
                                <Button
                                    type="primary"
                                    scrollTo="summary"
                                    onClick={handleScrollAndClose}
                                >
                                    {button}
                                </Button>
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
}
