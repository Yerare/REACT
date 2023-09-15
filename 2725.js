var cancellable = function(fn, args, t) {
    fn(...args);
    const timer = setInterval(fn , t, ...args);

    const cancelFn = () => clearInterval(timer);
    return cancelFn;
};