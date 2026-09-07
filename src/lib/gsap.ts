"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create("out-expo", "0.16, 1, 0.3, 1");

export const EASE = {
  outExpo: "out-expo",
} as const;

export { gsap, ScrollTrigger };
export const scrollTriggerConfig = (): ScrollTrigger.Vars => ({
  start: "top 85%",
  toggleActions: "play none none reverse",
});