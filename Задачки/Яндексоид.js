function createCountdown(n) {
    return function hui() {
        if (Number.isInteger(n)) {
            while (n >= 0) {
                n--
                return n
            }
        }
        return 0
    }
}
const countdownFrom2 = createCountdown(3)

console.log(countdownFrom2())
