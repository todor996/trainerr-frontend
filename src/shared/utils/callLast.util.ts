/**
 * It will call a function after `time` passes
 * If multiple functions are called in `time` frame, only the last function will be called.
 * Timer is restarted every time this function is called.
 */
export function callLast(fn, time = 300) {
  let timer = null;

  return (...args) => {
    // If timer exists, clear timeout so previous call is not executed
    if (timer) {
      clearTimeout(timer);
    }

    // Set timeout for `fn` execution
    timer = setTimeout(() => {
      fn(...args);
    }, time);
  };
}
