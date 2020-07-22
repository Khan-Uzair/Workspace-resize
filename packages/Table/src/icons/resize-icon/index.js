import React from 'react';

const LEFT_ONLY = 'leftOnly';
const RIGHT_ONLY = 'rightOnly';
const FOCUSED = 'focused';

export const rightOnlyIcon = (
	<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
		<g fill='none' fillRule='evenodd' transform='matrix(-1 0 0 1 20 0)'>
			<circle cx='10' cy='10' r='10' fill='#007EB3' />
			<path fill='#FFF' d='M13.5 8.5L16.5 11.5 10.5 11.5z' opacity='.5' transform='rotate(90 13.5 10)' />
			<path fill='#FFF' d='M6.5 8.5L9.5 11.5 3.5 11.5z' transform='matrix(0 1 1 0 -3.5 3.5)' />
		</g>
	</svg>
);

export const leftOnlyIcon = (
	<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
		<g fill='none' fillRule='evenodd' transform='matrix(-1 0 0 1 20 0)'>
			<circle cx='10' cy='10' r='10' fill='#007EB3' />
			<path fill='#FFF' d='M13.5 8.5L16.5 11.5 10.5 11.5z' transform='rotate(90 13.5 10)' />
			<path
				fill='#FFF'
				d='M6.5 8.5L9.5 11.5 3.5 11.5z'
				opacity='.5'
				transform='matrix(0 1 1 0 -3.5 3.5)'
			/>
		</g>
	</svg>
);

export const eitherDirectionIcon = (
	<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
		<g fill='none' fillRule='evenodd' transform='matrix(-1 0 0 1 20 0)'>
			<circle cx='10' cy='10' r='10' fill='#007EB3' />
			<path fill='#FFF' d='M13.5 8.5L16.5 11.5 10.5 11.5z' transform='rotate(90 13.5 10)' />
			<path fill='#FFF' d='M6.5 8.5L9.5 11.5 3.5 11.5z' transform='matrix(0 1 1 0 -3.5 3.5)' />
		</g>
	</svg>
);

export const focusedIcon = (
	<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
		<g fill='none' fillRule='evenodd' transform='matrix(-1 0 0 1 20 0)'>
			<circle cx='10' cy='10' r='10' fill='#007EB3' />
			<path fill='#FFF' d='M13.5 8.5L16.5 11.5 10.5 11.5z' transform='rotate(90 13.5 10)' />
			<path fill='#FFF' d='M6.5 8.5L9.5 11.5 3.5 11.5z' transform='matrix(0 1 1 0 -3.5 3.5)' />
		</g>
	</svg>
);

export default function ResizeIcon({ iconType }) {
	if (iconType === LEFT_ONLY) {
		return leftOnlyIcon;
	} if (iconType === RIGHT_ONLY) {
		return rightOnlyIcon;
	} if (iconType === FOCUSED) {
		return focusedIcon;
	}
	return eitherDirectionIcon;
}
