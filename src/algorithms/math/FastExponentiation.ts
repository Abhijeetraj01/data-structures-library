export function fastPower(
    base: number,
    exponent: number
): number {

    let result = 1;

    while (exponent > 0) {

        if (exponent % 2 === 1) {
            result *= base;
        }

        base *= base;

        exponent =
            Math.floor(exponent / 2);
    }

    return result;
}