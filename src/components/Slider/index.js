import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import styles from "./Slider.module.scss"

export const Slider = (({ className, ...props }, ref) => (
    <SliderPrimitive.Root
        ref={ref}
        className={`${styles.root} ${className}`}
        {...props}
    >
        <SliderPrimitive.Track className={styles.track}>
            <SliderPrimitive.Range className={styles.range} />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className={styles.thumb} />
    </SliderPrimitive.Root>
))

Slider.displayName = SliderPrimitive.Root.displayName