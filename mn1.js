$httpClient.get('https://api.my-ip.io/ip', function (error, response, data) {
  $done({
    title: '当前 IP 地址',
    content: data,
    icon: https://raw.githubusercontent.com/fanmingming/Rules/main/Filter/Netflix.png,
    backgroundColor: '#663399',
 })
})