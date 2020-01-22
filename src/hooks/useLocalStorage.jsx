import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
	const [storedValued, setStoreValue] = useState(() => {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : initialValue;
	});

	const setValue = value => {
		setStoreValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	};

	return [storedValued];
};

export default useLocalStorage;
