import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, Text, View } from 'react-native';
import { WhiteSpace, WingBlank, List, } from 'antd-mobile-rn';


const Item = List.Item;
const PlaceHolder = (props) => (
    <View
        style={{
            backgroundColor: '#dcdcdc',
            height: 8,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -6
        }}
        {...props}
    >
    </View>
);

export default class WingBlankExample extends Component{
  render() {
    return (
      <View>
          <Item data-seed="logId" style={styles.title}>账户管理</Item>
          <Item disabled extra="" arrow="horizontal" onPress={() => {}}>
              基本信息
          </Item>
          <WhiteSpace size="sm" />
          <PlaceHolder />
          <Item disabled extra="" arrow="horizontal" onPress={() => {}}>
              账户安全
          </Item>
          <Item data-seed="logId" style={styles.title}>
              系统管理
          </Item>
          <Item disabled extra="" arrow="horizontal" onPress={() => {}}>
              版本更新
          </Item>
          <WhiteSpace size="sm" />
          <PlaceHolder />
          <Item disabled extra="" arrow="horizontal" onPress={() => {}}>
              清理缓存
          </Item>
          <WhiteSpace size="sm" />
          <PlaceHolder />
          <Item disabled extra="" arrow="horizontal" onPress={() => {}}>
              使用帮助
          </Item>
          <WhiteSpace size="sm" />
          <PlaceHolder />
          <Item disabled extra="" arrow="horizontal" onPress={() => {}}>
              意见反馈
          </Item>
          <WhiteSpace size="sm" />
          <PlaceHolder />
          <Item disabled extra="" arrow="horizontal" onPress={() => {}}>
              关于我们
          </Item>
          <WhiteSpace style={styles.bgcolor} size="sm" />
          <PlaceHolder />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: '#ddd',
        height: 70
    },
    bgcolor: {
        backgroundColor: '#dcdcdc',
        height: 180,
    }
});

/*render() {
    return (
        <WebView
            onMessage={(e) => this.onMessage(e)}
            onLoadEnd={this.onLoadEnd}
            ref={webview => this.webview = webview}
            source={{uri: 'http://192.168.0.131:8085/#/'}}
            style={styles.container}
            startInLoadingState={true}
            geolocationEnabled={true}
            renderError={() => {
                return <View><Text>网络错误，无法访问</Text></View>
            }}
            onError={() => {
                return <View><Text>网络错误</Text></View>
            }}
        />
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});*/
