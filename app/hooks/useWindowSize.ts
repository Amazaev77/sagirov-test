import { useEffect, useState } from 'react'

interface Size {
	width: number | null
	height: number | null
}

function useWindowSize(): Size {
	const [windowSize, setWindowSize] = useState<Size>({
		width: null,
		height: null,
	})
	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}
		window.addEventListener('resize', handleResize)
		handleResize()
		return () => window.removeEventListener('resize', handleResize)
	}, [])
	return windowSize
}

export default useWindowSize
