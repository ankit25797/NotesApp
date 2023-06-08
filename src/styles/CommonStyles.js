import {StyleSheet} from 'react-native';
import COLORS from '../theme/colors';
import {FONT_SIZE, FONT_TYPE} from '../theme/fonts';
import METRICS from '../theme/metrics';

export default CommmonStyles = StyleSheet.create({
  bg: {
    width: METRICS.screenWidth,
    height: METRICS.screenHeight,
  },
  p15: {
    padding: 15,
  },
  conatiner: {
    paddingHorizontal: 20,
  },
  textAlignCenter: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  titleText: {
    fontSize: FONT_SIZE.font24,
    color: COLORS._font_blue,
    fontWeight: 'bold',
  },
  subTitleText: {
    fontSize: FONT_SIZE.font14,
    color: COLORS._font_light_blue,
  },
});
