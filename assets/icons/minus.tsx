import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const MinusIcon = () => (
	<Svg width={10} height={2} fill="none">
		<Path
			stroke="#AAADB0"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M1 1h8"
		/>
	</Svg>
);
export default MinusIcon;
