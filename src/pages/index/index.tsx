import { View } from '@tarojs/components';
import Taro, { Component, Config } from '@tarojs/taro';
import C from '../../component/list';
import './index.css';

class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页',
  };

  render() {
    return (
      <View className="index">
        <C></C>
      </View>
    );
  }
}

export default Index;
