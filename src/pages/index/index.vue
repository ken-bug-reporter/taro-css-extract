<template>
    <navbar mode="all">
        <view class="welcome-wrapper font-bold">
            <view class="text">Ready to use Taro + Cix.</view>
            <view class="text">准备好，Taro + Cix.</view>
        </view>

        <view class="test-module">
            <view class="title font-bold">功能示例</view>
            <block v-for="item in modules" key="key">
                <view class="link" @tap="toTestModule(item.path)">{{item.name}}</view>
            </block>
        </view>
    </navbar>
</template>

<script lang="ts">
import "./index.less"
import index from "./indexT";
export default index;

</script>

<style lang="less">
</style>
