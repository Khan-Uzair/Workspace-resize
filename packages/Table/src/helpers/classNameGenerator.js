import * as elements from '../constants';

function headerStyles(props) {
	if (props.stickyHeader && props.stickyColumn) {
		return 'sticky-header';
	}
	if (props.stickyHeader) {
		return 'sticky-header non-sticky-col';
	}
	return '';
}
function tableStyles(props) {
	if (props.stickyColumn) {
		return 'sticky-first-col';
	}
	return '';
}
function subheaderStyles(props) {
	const className = `${props.stickySubheader ? 'sticky-header' : ''} ${props.stickyHeader && props.stickySubheader ? 'sticky-subheader-top' : ''}`;
	return className;
}
export default function classNameGenerator(ele, props) {
	switch (ele) {
	case elements.HEAD:
		return headerStyles(props);
	case elements.SUBHEAD:
		return subheaderStyles(props);
	case elements.TABLE:
		return tableStyles(props);
	default: return '';
	}
}
