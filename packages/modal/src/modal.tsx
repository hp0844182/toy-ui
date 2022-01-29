import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Backdrop } from '@hpui/backdrop'
import { Transition } from '@hpui/transition'
import { Button } from '@hpui/button'
import { CloseIcon } from '@hpui/icon'

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Function executed when the dropdown is closed
   */
  onClose: () => void
  /**
   * Defines if the modal is open
   */
  isOpen: boolean
  /**
   * Defines if the modal is in the center of the window
   */
  center?: boolean
  header: React.ReactNode
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(function Modal(props, ref) {
  const { children, onClose, isOpen, center, header, ...other } = props
  const backCls = center ? 'flex items-center' : ''

  function handleEsc(e: KeyboardEvent) {
    if (e.key === 'Esc' || e.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEsc, { capture: true })
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const modalComponent = (
    <Transition show={isOpen}>
      <>
        <Transition
          enter="transition ease-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Backdrop onClick={onClose} className={backCls}>
            <Transition
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 transform translate-y-1/2"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0  transform translate-y-1/2"
            >
              <div className="modal" role="dialog" onClick={(e) => e.stopPropagation()} ref={ref} {...other}>
                {/* header */}
                <header className="modal-header">
                  <p>{header}</p>
                  <Button
                    aria-label="close"
                    color="secondary"
                    size="sm"
                    variant="light"
                    onClick={onClose}
                    leftIcon={<CloseIcon className="text-base" />}
                  ></Button>
                </header>
                {/* body */}
                <div className="modal-body" ref={ref} {...other}>
                  {children}
                </div>
                {/* footer */}
                <footer className="modal-footer" ref={ref} {...other}>
                  <Button variant="light">取消</Button>
                  <Button>确定</Button>
                </footer>
              </div>
            </Transition>
          </Backdrop>
        </Transition>
      </>
    </Transition>
  )

  return mounted ? createPortal(modalComponent, document.body) : null
})
