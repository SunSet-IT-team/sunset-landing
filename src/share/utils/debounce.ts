/**
 * Утилита, позволяющая делать дебаунс переданного callback.
 * Для корректной работы в компонентах React, необходимо обернуть debounce в useCallback
 */
export function debounce<F extends (...args: any[]) => any>(
  fn: F,
  delay = 500
) {
  let timer: NodeJS.Timeout

  return (...args: Parameters<F>) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}
