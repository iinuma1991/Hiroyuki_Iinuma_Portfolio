'use client'

import ContactModal from '@/components/ContactModal'
import { useModal } from '@/context/ModalContext'

export default function ModalRoot() {
  const { isOpen, close } = useModal()

  if (!isOpen) return null

  return <ContactModal onClose={close} />
}
