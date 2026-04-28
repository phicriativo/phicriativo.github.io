import { useState } from 'react'

let toastCount = 0

export function useToast() {
  const [toasts, setToasts] = useState([])

  const toast = ({ title, description, variant = 'default', duration = 4000 }) => {
    const id = ++toastCount
    setToasts((prev) => [...prev, { id, title, description, variant }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, duration)
  }

  const dismiss = (id) => setToasts((prev) => prev.filter((t) => t.id !== id))

  return { toasts, toast, dismiss }
}

export { useToast as toast }
