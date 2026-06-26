import { gcd } from "./GCD";

export function lcm(
    a: number,
    b: number
): number {

    return Math.abs(a * b) / gcd(a, b);
}