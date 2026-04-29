import { useToast } from '@/hooks/use-toast'

export function Toaster() {
  const { toasts } = useToast()

  if (!toasts.length) return null

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-sm">
      {toasts.map(({ id, title, description, variant }) => (
        <div
          key={id}
          className={`rounded-lg border p-4 shadow-lg bg-card text-card-foreground ${
            variant === 'destructive' ? 'border-destructive text-destructive' : 'border-border'
          }`}
        >
          {title && <p className="text-sm font-semibold">{title}</p>}
          {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
        </div>
      ))}
    </div>
  )
}
