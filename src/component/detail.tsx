import { View } from '@tarojs/components';
import Taro, { memo } from '@tarojs/taro';

interface Data {
  no: number;
  text: string;
}

function Detail(props: Data) {
  const { no, text } = props;
  console.log('render', props);
  return (
    <View>
      No. {no} text {text}
    </View>
  );
}

export default memo(Detail);
