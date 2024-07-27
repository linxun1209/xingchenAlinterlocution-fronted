<template>
  <div id="AppStatisticPage">
    <div class="searchBar">
      <div id="appStatisticPage">
        <h2>热门应用统计</h2>
        <v-chart :option="appAnswerCountOptions" style="height: 300px" />
        <h2>应用结果统计</h2>
        <a-input-search
            :style="{ width: '320px' }"
            placeholder="输入 appId"
            button-text="搜索"
            search-button
            @search="(value) => loadAppAnswerResultCountData(value)"
        />
        <v-chart :option="appAnswerResultCountOptions" style="height: 300px" />
      </div>

    </div>
    <div style="margin-bottom: 16px" />

  </div>

</template>

<script setup lang="ts">
import {computed, ref, watchEffect} from "vue";
import message from "@arco-design/web-vue/es/message";
import {getAppAnswerCountUsingGet, getAppAnswerResultCountUsingGet} from "@/api/appStatisticController";
import VChart from "vue-echarts";
import "echarts";



const appAnswerCountList=ref<API.AppAnswerCountDTO[]>([]);
const appAnswerResultCountList=ref<API.AppAnswerResultCountDTO[]>([]);


/**
 * 加载数据
 */
const loadAppAnswerCountData = async () => {
  const res = await getAppAnswerCountUsingGet();
  if (res.data.code === 0) {
   appAnswerCountList.value=res.data.data||[];
  } else {
    message.error("获取数据失败，" + res.data.message);
  }
};

const loadAppAnswerResultCountData = async (appId:String) => {
  if(!appId){
    return;
  }
  const res = await getAppAnswerResultCountUsingGet({
    appId:appId as any,
  });
  if (res.data.code === 0) {
    appAnswerResultCountList.value=res.data.data||[];
  } else {
    message.error("获取数据失败，" + res.data.message);
  }
};

/**
 * 监听 searchParams 变量，改变时触发数据的重新加载
 */
watchEffect(() => {
  loadAppAnswerCountData();
});


watchEffect(() => {
  loadAppAnswerResultCountData("");
});



const appAnswerCountOptions = computed(() => {
  return {
    xAxis: {
      type: "category",
      data: appAnswerCountList.value.map((item) => item.appId),
      name: "应用 id",
    },
    yAxis: {
      type: "value",
      name: "做题用户数",
    },
    series: [
      {
        data: appAnswerCountList.value.map((item) => item.answerCount),
        type: "bar",
      },
    ],
  };
});

const appAnswerResultCountOptions = computed(() => {
  return {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        type: "pie",
        radius: "50%",
        data: appAnswerResultCountList.value.map((item) => {
          return {
            value: item.resultCount,
            name: item.resultName,
          };
        }),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
});
</script>

<style scoped>
#homePage {
}

.searchBar {
  text-align: center;
  margin-bottom: 28px;
}

.list-demo-action-layout .image-area {
  width: 183px;
  height: 119px;
  overflow: hidden;
  border-radius: 2px;
}

.list-demo-action-layout .list-demo-item {
  padding: 20px 0;
  border-bottom: 1px solid var(--color-fill-3);
}

.list-demo-action-layout .image-area img {
  width: 100%;
}

.list-demo-action-layout .arco-list-item-action .arco-icon {
  margin: 0 4px;
}
</style>