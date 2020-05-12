import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
	const { key } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [key]);

	return null;
};
