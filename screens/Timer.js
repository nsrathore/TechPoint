export default class Timer {
    static load(cb) {
        setTimeout(cb, 1000);
    }
}