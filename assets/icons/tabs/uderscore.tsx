import * as React from 'react';
import Svg, { Rect, Defs, LinearGradient, Stop, SvgProps } from 'react-native-svg';
const UnderscoreIcon = (props: SvgProps) => (
	<Svg width={11} height={5} fill="none" {...props}>
		<Rect width={10} height={5} fill="url(#a)" rx={2.5} />
		<Defs>
			<LinearGradient
				id="a"
				x1={6.444}
				x2={1.058}
				y1={-1.269}
				y2={0.619}
				gradientUnits="userSpaceOnUse"
			>
				<Stop stopColor="#C67C4E" />
				<Stop offset={1} stopColor="#EDAB81" />
			</LinearGradient>
		</Defs>
	</Svg>
);
export default UnderscoreIcon;
