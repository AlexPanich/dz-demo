import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const BackIcon = () => (
	<Svg width={24} height={24} fill="none">
		<Path
			stroke="#2F2D2C"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="m15.5 19-7-7 7-7"
		/>
	</Svg>
);
export default BackIcon;
