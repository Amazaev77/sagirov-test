import { RefObject, useEffect } from 'react'

type Handler = () => void

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>,
	handler: Handler
): void {
	useEffect(() => {
		document.addEventListener('mousedown', (event) => {
			const el = ref?.current
			if (!el || el.contains(event.target as Node)) {
				return
			}

			handler()
		})
	}, [])
}

export default useOnClickOutside
