import React from "react";
import { LineChart } from "@opd/g2plot-react";

import Data from "./jsonData";

const data1 = [
  {
    date: "2018/8/1",
    type: "Systolic",
    value: 4623
  },
  {
    date: "2018/8/1",
    type: "Diastolic",
    value: 2208
  },

  {
    date: "2018/8/2",
    type: "Systolic",
    value: 6145
  },
  {
    date: "2018/8/2",
    type: "Diastolic",
    value: 2016
  },

  {
    date: "2018/8/3",
    type: "Systolic",
    value: 508
  },
  {
    date: "2018/8/3",
    type: "Diastolic",
    value: 2916
  },

  {
    date: "2018/8/4",
    type: "Systolic",
    value: 6268
  },
  {
    date: "2018/8/4",
    type: "Diastolic",
    value: 4512
  },

  {
    date: "2018/8/5",
    type: "Systolic",
    value: 6411
  },
  {
    date: "2018/8/5",
    type: "Diastolic",
    value: 8281
  },

  {
    date: "2018/8/6",
    type: "Systolic",
    value: 1890
  },
  {
    date: "2018/8/6",
    type: "Diastolic",
    value: 2008
  },

  {
    date: "2018/8/7",
    type: "Systolic",
    value: 4251
  },
  {
    date: "2018/8/7",
    type: "Diastolic",
    value: 1963
  },

  {
    date: "2018/8/8",
    type: "Systolic",
    value: 2978
  },
  {
    date: "2018/8/8",
    type: "Diastolic",
    value: 2367
  },

  {
    date: "2018/8/9",
    type: "Systolic",
    value: 3880
  },
  {
    date: "2018/8/9",
    type: "Diastolic",
    value: 2956
  },

  {
    date: "2018/8/10",
    type: "Systolic",
    value: 3606
  },
  {
    date: "2018/8/10",
    type: "Diastolic",
    value: 678
  },

  {
    date: "2018/8/11",
    type: "Systolic",
    value: 4311
  },
  {
    date: "2018/8/11",
    type: "Diastolic",
    value: 3188
  },

  {
    date: "2018/8/12",
    type: "Systolic",
    value: 4116
  },
  {
    date: "2018/8/12",
    type: "Diastolic",
    value: 3491
  },

  {
    date: "2018/8/13",
    type: "Systolic",
    value: 6419
  },
  {
    date: "2018/8/13",
    type: "Diastolic",
    value: 2852
  },

  {
    date: "2018/8/14",
    type: "Systolic",
    value: 1643
  },
  {
    date: "2018/8/14",
    type: "Diastolic",
    value: 4788
  },

  {
    date: "2018/8/15",
    type: "Systolic",
    value: 445
  },
  {
    date: "2018/8/15",
    type: "Diastolic",
    value: 4319
  }
];

var Diastolicresult = Data.sub_CategoryBloodPres.map(glue => ({
  value: glue.level,
  type: "Diastolic",
  date: glue.date
}));

var Systolicresult = Data.sub_CategoryBloodPres.map(glue => ({
  value: glue.level2,
  type: "Systolic",
  date: glue.date
}));

var finalObj = Diastolicresult.concat(Systolicresult);

const config1 = {
  title: {
    visible: false,
    text: "多折线图"
  },
  description: {
    visible: false,
    text: "将数据按照某一字段进行分组，用于比对不同类型数据的趋势。"
  },
  padding: "auto",
  forceFit: true,
  data: finalObj,
  xField: "date",
  yField: "value",
  yAxis: {
    label: {
      // 数值格式化为千分位
      formatter: v => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, s => `${s},`)
    }
  },
  legend: {
    position: "right-top"
  },
  seriesField: "type",
  responsive: true
};

export default () => (
  <section>
    <LineChart {...config1} />
  </section>
);
