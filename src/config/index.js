export const cookie = process.env.JUEJIN_COOKIE;
export const headers = {
    cookie,
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/json",
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0',
    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "Referer": "https://juejin.cn/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
}

export const email = {
    user: process.env.MAIL_SENDER,
    pass: process.env.SMTP_PASSWORD,
    host: process.env.MAIL_HOST_SENDER || 'smtp.qq.com',
    port: process.env.MAIL_PORT_SENDER || '465',
    to: process.env.MAIL_RECIPIENT
}