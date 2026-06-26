export function modAdd(
    a: number,
    b: number,
    mod: number
): number {

    return ((a % mod) + (b % mod)) % mod;
}

export function modSubtract(
    a: number,
    b: number,
    mod: number
): number {

    return (
        ((a % mod) - (b % mod) + mod)
        % mod
    );
}

export function modMultiply(
    a: number,
    b: number,
    mod: number
): number {

    return (
        ((a % mod) * (b % mod))
        % mod
    );
}

export function modPower(
    base: number,
    exponent: number,
    mod: number
): number {

    let result = 1;

    base %= mod;

    while (exponent > 0) {

        if (exponent & 1) {
            result =
                (result * base) % mod;
        }

        base =
            (base * base) % mod;

        exponent >>= 1;
    }

    return result;
}