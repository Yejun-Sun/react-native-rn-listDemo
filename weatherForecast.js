import React, {Component} from 'react';
import {StyleSheet, Image, ScrollView, Text, View} from 'react-native';
import {WhiteSpace, WingBlank, List} from 'antd-mobile-rn';
import { Container, Content, Tabs, H1, H2, H3 } from 'native-base';
import ScrollableTabView , { ScrollableTabBar, DefaultTabBar, ReactPage } from "react-native-scrollable-tab-view"


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
export default class WeatherForecast extends Component {
    render() {
        return (
            <ScrollView>
                <Item data-seed="logId" extra={'Icon'} style={styles.title}>四路医院站</Item>
                <Item data-seed="logId" extra={'19/03/27 16:00'}>未来三天预报</Item>
                <View style={styles.weekWeather}>
                    <View>
                        <Text  tabLabel='时间' >04/19</Text >
                        <Text  tabLabel='温度'> 15~22 </Text >
                        <Text  tabLabel='空气质量'> 良</Text >
                        <Text  tabLabel='PM2.5'> PM2.5</Text >
                    </View>
                    <View>
                        <Text  tabLabel='时间' >04/20</Text >
                        <Text  tabLabel='温度'> 18~24 </Text >
                        <Text  tabLabel='空气质量'> 良</Text >
                        <Text  tabLabel='PM2.5'> PM2.5</Text >
                    </View>
                    <View>
                        <Text  tabLabel='时间' >04/21</Text >
                        <Text  tabLabel='温度'> 16~30 </Text >
                        <Text  tabLabel='空气质量'> 良</Text >
                        <Text  tabLabel='PM2.5'> PM2.5</Text >
                    </View>
                </View>

                <Item data-seed="logId" extra={'Icon'} style={styles.title}>西宁大市</Item>

                <Item>24小时预报</Item>
                <ScrollableTabView
                    // style={styles.container}
                    initialPage={0}
                    renderTabBar={()=> <ScrollableTabBar  />}
                    tabBarBackgroundColor='#fff'
                    tabBarActiveTextColor='#5ebfff'
                    tabBarInactiveTextColor='#333'
                    // tabBarUnderlineStyle={styles.lineStyle}
                >
                    <Text  tabLabel='AQI'  >AQI</Text >
                    <Text  tabLabel='PM2.5'> PM2.5</Text >
                    <Text  tabLabel='PM10'> PM10</Text >
                    <Text  tabLabel='NO2'> NO2</Text >
                    <Text  tabLabel='SO2'> SO2</Text >
                    <Text  tabLabel='O3'> O3</Text >
                    <Text  tabLabel='CO'> CO</Text >
                </ScrollableTabView>
                {/*<Container>
                    <Content>
                        <H1>Header One</H1>
                        <H2>Header Two</H2>
                        <H3>Header Three</H3>
                    </Content>
                </Container>*/}


                <Item>一周预报</Item>
                <View style={styles.weekWeather}>
                    <View>
                        <Text  tabLabel='时间' >今天</Text >
                        <Text  tabLabel='日期'> 4月19日</Text >
                        <Text  tabLabel='空气质量'> 良</Text >
                    </View>
                    <View>
                        <Text  tabLabel='时间' >周六</Text >
                        <Text  tabLabel='日期'> 4月20日</Text >
                        <Text  tabLabel='空气质量'> 良</Text >
                    </View>
                    <View>
                        <Text  tabLabel='时间' >周日</Text >
                        <Text  tabLabel='日期'> 4月21日</Text >
                        <Text  tabLabel='空气质量'> 优</Text >
                    </View>
                    <View>
                        <Text  tabLabel='时间' >周一</Text >
                        <Text  tabLabel='日期'> 4月22日</Text >
                        <Text  tabLabel='空气质量'> 良</Text >
                    </View>
                    <View>
                        <Text  tabLabel='时间' >周二</Text >
                        <Text  tabLabel='日期'> 4月23日</Text >
                        <Text  tabLabel='空气质量'> 良</Text >
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: '#ddd',
        height: 50
    },
    bgcolor: {
        backgroundColor: '#dcdcdc',
        height: 180,
    },
    weekWeather: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
        padding: 10
    }
});
