export function eulerTotient(
    n: number
): number {

    let result = n;

    let number = n;

    for (
        let i = 2;
        i * i <= number;
        i++
    ) {

        if (number % i === 0) {

            while (
                number % i === 0
            ) {
                number /= i;
            }

            result -=
                result / i;
        }
    }

    if (number > 1) {
        result -=
            result / number;
    }

    return result;
}