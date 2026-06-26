export function gcd(
    a: number,
    b: number
): number {

    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}


//recursive way--
export function gcdRecursive(
    a: number,
    b: number
): number {

    if (b === 0) {
        return Math.abs(a);
    }

    return gcdRecursive(
        b,
        a % b
    );
}