<template>
    <div class="loading" v-show="props.msg.show">
        <div class="load-box">
            <n-icon class="loading-icon" color="#FFF" size="40">
                <ArrowClockwiseDashes20Filled />
            </n-icon>
            <div>{{ props.msg.title }}</div>
        </div>
    </div>
</template>

<script setup lang="tsx">
import { NIcon } from 'naive-ui'
import { ArrowClockwiseDashes20Filled } from "@vicons/fluent";

type messageData = {
    show: boolean;
    title: string;
};

const props = defineProps<{ msg: messageData }>();
</script>

<style scoped lang="scss">
.loading {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
    .load-box {
        display: flex;
        align-items: center;
        justify-content: center;

        letter-spacing: 0.8px;
        font-size: 13px;
        color: #fff;
    }

    .loading-icon {
        animation: animation 1s linear infinite;
    }
}

@keyframes animation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
