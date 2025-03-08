import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import { TaskProvider } from './providers/TaskProvider.tsx'
import { MessageProvider } from './providers/MessageProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MessageProvider>
    <TaskProvider>
    <RouterProvider router={router} />
    </TaskProvider>
    </MessageProvider>
  </StrictMode>,
)
