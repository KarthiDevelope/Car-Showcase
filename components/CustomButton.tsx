"use client";
import Image from "next/image"
import { customButtonProps } from "@/types";

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon, isDisabled }: customButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>

            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="arrow icon"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    )
}

export default CustomButton