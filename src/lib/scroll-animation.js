import { gsap } from "gsap";

export const scollAnimation= (position, target, onUpdate) => {
    const tl= gsap.timeline();

    tl.to(position, {
        x, 
        y, 
        z, 
        scrollTrigger: {
            trigger: '.sound-section',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    })
}