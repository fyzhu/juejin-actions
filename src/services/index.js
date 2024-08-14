import { request } from './request.js';
const prefix = 'https://api.juejin.cn/growth_api/v1/';

/**
 * 抽奖
 * @author 若川
 * @date 2022-01-09
 */
export const draw = async function(){
    return await request({
        url: `${prefix}lottery_config/get`,
    });
}

/**
 * 获取签到状态
 * @author 若川
 * @date 2022-01-09
 */
export const getStatus = async function(){
    return await request({
        url: `${prefix}get_today_status`,
    });
}

/**
 * 签到
 * @author 若川
 * @date 2022-01-09
 */
export const checkIn = async function(){
    return await request({
        url: `${prefix}check_in?aid=2608&uuid=7244182731365762617&spider=0&msToken=ZfB76UE8OVvtR5pVFjq-HKfGn87zO3mG1ae75JXahP9eP3j3Z91UseGxC6EA6quL1JgXkU3srTOVODDodxgXw3x5bFHQDKFZUKI95QV7m5R0gQBgdxBTGyxahPuexiw%3D&a_bogus=df4dhO2OMsm1wXVfOwDz9y8Ex3u0YW4bgZENCs8KDzLS`,
        method: 'post',
        data: {
            // aid:2608,
            // uuid:7244182731365762617,
            // spider:0,
            // msToken:'ZfB76UE8OVvtR5pVFjq-HKfGn87zO3mG1ae75JXahP9eP3j3Z91UseGxC6EA6quL1JgXkU3srTOVODDodxgXw3x5bFHQDKFZUKI95QV7m5R0gQBgdxBTGyxahPuexiw%3D'
            // ,a_bogus:'df4dhO2OMsm1wXVfOwDz9y8Ex3u0YW4bgZENCs8KDzLS'
        }
    });
}

/**
 * 获取连续签到天数、累计签到天数
 * @author 若川
 * @date 2022-01-09
 */
export const getCounts = async function(){
    return await request({
        url: `${prefix}get_counts`,
    });
}

/**
 * 获取当前积分
 * @author 若川
 * @date 2022-01-09
 */
export const getCurPoint = async function(){
    return await request({
        url: `${prefix}get_cur_point`,
    });
}

/**
 * 抽奖~不是第一次会花200矿石
 * @author StevenLee
 * @date 2022-02-18
 */
export const freeDraw = async function(){
    return await request({
        url: `${prefix}lottery/draw?aid=2608&uuid=7244182731365762617&spider=0&msToken=gcX9HGQmxv6x6PTquHaMrTkaBIyM4rAHc9k1vyq7p2_2XHlrGvD_hEY_LJQzopb7NLXy3-1hWOKYlHOGuL1ObFxTVjbDxp2kl3qnhRSy0V6TMpxCuzE7oMAAfgUUlLs%3D&a_bogus=E6UmvOZVMsm1MhVfRXDz9emExIg0YW59gZENEhiyJzLK`,
        method: 'post', 
        data: {}
    });
}
