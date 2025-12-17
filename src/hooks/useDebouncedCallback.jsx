import { useRef, useCallback, useEffect } from "react";

// Este hook recibe una función (callback) y un tiempo de espera (delay).
export function useDebouncedCallback(callback, delay) {
  // 1. Usamos useRef para almacenar la referencia al ID del timer.
  // Esto es crucial para que podamos acceder a él y cancelarlo (clearTimeout)
  // sin causar re-renders.
  const timerRef = useRef(null);

  // 2. Usamos useRef para almacenar la función callback más reciente.
  // Esto resuelve el problema del 'Stale Closure', asegurando que la función
  // que se ejecuta después del delay usa las últimas props/estados.
  const latestCallback = useRef(callback);

  // Si la función callback cambia (raro en este caso, pero buena práctica), actualiza la referencia.
  useEffect(() => {
    latestCallback.current = callback;
  }, [callback]);

  // 3. La función debounced que llamaremos en el onChange del editor.
  const debouncedCallback = useCallback(
    (...args) => {
      // A. Limpia el timer anterior, si existe (la lógica del Debounce).
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      // B. Programa la nueva ejecución.
      // Se ejecuta una función anónima después del delay.
      timerRef.current = setTimeout(() => {
        // C. Llama al callback original con los últimos argumentos.
        latestCallback.current(...args);
      }, delay);
    },
    [delay]
  ); // El hook solo se recrea si el delay cambia.

  // 4. (Opcional, pero Recomendado): Limpieza al desmontar el componente.
  useEffect(() => {
    // Cancela cualquier timer pendiente cuando el componente se desmonta.
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return debouncedCallback;
}
