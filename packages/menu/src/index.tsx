import React from 'react'

export const Menu: React.FunctionComponent = () => {
  return (
    <nav aria-label="Main" className="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
      <div x-data="{ isActive: true, open: true}">
        <a
          href="#"
          className="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
          // :class="{'bg-primary-100 dark:bg-primary': isActive || open}"
        ></a>
      </div>
    </nav>
  )
}
