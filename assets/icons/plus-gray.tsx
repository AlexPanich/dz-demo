import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const PlusGrayIcon = () => (
	<Svg width={16} height={16} fill="none">
		<Path
			stroke="#2F2D2C"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M4 8h8M8 12V4"
		/>
	</Svg>
);
export default PlusGrayIcon;
