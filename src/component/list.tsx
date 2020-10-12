import { View } from '@tarojs/components';
import Taro, { memo, useCallback, useState } from '@tarojs/taro';
import D from './detail';

interface Data {
  no: number;
  text: string;
}

const data1: Array<Data> = Array(10)
  .fill(0)
  .map((_, i) => ({ no: i + 1, text: `${i + 1}` }));

const data2: Array<Data> = Array(10)
  .fill(0)
  .map((_, i) => ({ no: i + 1, text: `${i + 1}` }))
  .reverse();

function AppLoading() {
  const [arr, setArr] = useState<Data[]>(data1);
  const handleClick = useCallback(() => {
    setArr(data => {
      return data === data1 ? data2 : data1;
    });
  }, [setArr]);
  console.log('arr', arr);
  return (
    <View>
      <View onClick={handleClick}>Toggle</View>
      {arr.map(e => {
        // 这里如果不使用 key 是正常的
        // return <D no={e.no} text={e.text}></D>;
        // 如果使用 key 就会出现异常。
        return <D key={e.no} no={e.no} text={e.text}></D>;
      })}
    </View>
  );
}

export default memo(AppLoading);
