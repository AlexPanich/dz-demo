import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../../../shared/tokens';
const MainIcon = ({ focused }: { focused: boolean }) => (
	<Svg width={20} height={20} fill="none">
		<Path
			fill={focused ? Colors.primary : Colors.gray6}
			d="M7.144 18.782v-3.067c0-.777.632-1.408 1.414-1.413h2.875c.786 0 1.423.633 1.423 1.413v3.058c0 .674.548 1.222 1.227 1.227h1.96a3.46 3.46 0 0 0 2.444-1 3.41 3.41 0 0 0 1.013-2.422V7.866c0-.735-.328-1.431-.895-1.902L11.943.673a3.115 3.115 0 0 0-3.958.071L1.467 5.964A2.474 2.474 0 0 0 .5 7.865v8.703C.5 18.464 2.047 20 3.956 20h1.916c.327.002.641-.125.873-.354.232-.228.363-.54.363-.864h.036Z"
		/>
	</Svg>
);
export default MainIcon;
