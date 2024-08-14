import { checkIn, getStatus, getCounts, getCurPoint, freeDraw } from './services/index.js';

async function getInfo () {
  const [err1, res1] = await getCurPoint();
  const [err2, res2] = await getCounts();
  const [err3, res3] = await freeDraw();
  const message = [];
  if (!err1) {
    message.push(`当前矿石数: ${res1.data}`);
  }
  if (!err2) {
    message.push(`连续签到天数: ${res2.data.cont_count}`);
    message.push(`累计签到天数: ${res2.data.sum_count}\n`);
  }
  if (!err3) {
    console.log(res3.data);
    
    message.push(`免费抽奖完成，恭喜获得: ${res3.data.lottery_name}`);
  }

  return message;
}

export async function main () {
  const [err, res] = await getStatus();
  if (err) {
    console.log('获取状态出错', res);
    return [err, res];
  }

  if (res.err_no === 0 && !res.data) {
    const check_in_done = false
    if (check_in_done) { // 已签到
      const message = await getInfo();
      message.unshift('您今日已完成签到，请勿重复签到！');
      return [err, { err_msg: message }];
    } else {// 未签到
      let message
      const [err, res] = await checkIn(); // 签到
      message = await getInfo();
      try {
        message.unshift(JSON.stringify(res))
      } catch (error) {
        console.log('签到失败');
        message.unshift(res)
      }
      
      return [err, { err_msg: message }];
    }

  } else {
    let message
    if (res.data === true) {
      message = await getInfo();
      message.unshift('您今日已完成签到，请勿重复签到！');
    } else {
      message = ['签到出错：' + JSON.stringify(res)]
    }
    return [err, { err_msg: message }];
  }
}
