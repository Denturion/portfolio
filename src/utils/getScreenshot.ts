const SCREENSHOTONE_API_KEY = 'XAjFARmW1_jnHw';

export const getScreenshotUrl = (
	url: string,
	fallbackImage?: string,
): string => {
	if (fallbackImage) return fallbackImage;

	// Simplified API call based on screenshotone docs
	return `https://api.screenshotone.com/take?url=${encodeURIComponent(url)}&access_key=${SCREENSHOTONE_API_KEY}&viewport_width=1920&viewport_height=1080&format=jpg&cache=true&dark_mode=true`;
};

export const PLACEHOLDER_IMAGE =
	'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23374151"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239CA3AF"%3EPreview Not Available%3C/text%3E%3C/svg%3E';
