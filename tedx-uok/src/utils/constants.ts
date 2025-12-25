// Common styles for Team and Partners pages
export const sharedStyles = {
	// Card styles
	card: {
		base: 'group bg-card border border-border rounded-lg overflow-hidden flex flex-col h-full transition-transform hover:scale-105 shadow-lg hover:shadow-2xl',
		imageContainer: 'relative aspect-[3/4] overflow-hidden bg-[#0E0E0E]',
		content: 'p-6',
	},
	// Typography
	typography: {
		brandTitle: 'text-6xl md:text-7xl lg:text-8xl font-bold leading-tight',
		heroTitle: 'text-6xl md:text-7xl lg:text-8xl font-bold leading-tight',
		sectionTitle: 'text-4xl md:text-5xl font-bold text-white',
		cardTitle: 'font-bold text-white text-lg',
		cardSubtitle: 'text-base text-white/80',
		cardAccent: 'text-base text-white/70',
		trackLabel: 'text-xs uppercase text-white/60',
		description: 'text-xl md:text-2xl text-white/80',
		heroDescriptionDark: 'text-base md:text-lg text-white/80',
		heroDescriptionDark: 'text-xl md:text-2xl text-white/50',
	},
	// Colors
	colors: {
		tedxRed: 'text-[#EB0028]',
		black: 'text-black',
		white: 'text-white',
	},
	// Layout
	layout: {
		main: 'min-h-screen bg-black',
		heroSection: 'pt-20 pb-16 px-6',
		heroContainer: 'max-w-7xl mx-auto',
		heroFlex: 'flex flex-col md:flex-row justify-between items-start gap-8',
		heroAside: 'max-w-md md:text-right md:ml-auto',
		divider: 'border-t border-gray-200 max-w-7xl mx-auto',
		contentSection: 'py-16 px-6',
		pageContainer: 'max-w-7xl mx-auto',
		pageStack: 'max-w-7xl mx-auto space-y-24',
		gridThreeCol: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
		partnerGrid: 'grid grid-cols-2 md:grid-cols-3 gap-6',
	},
	// Partner configuration
	partner: {
		logoMaxHeight: 'max-h-36',
		imageContainer: 'relative bg-[#0E0E0E] flex items-center justify-center p-8 h-48 overflow-hidden',
	},
};
