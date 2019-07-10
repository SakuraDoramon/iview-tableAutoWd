<template>
  <div>
    <iframe :src="src" ref="iframe" width="100%"></iframe>
    <div @click="sendMessage">向iframe发送信息</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      src: 'http://192.168.1.134:6868/demo/reportJsp/preview.jsp?rpx=%2F%E6%80%BB%E8%B4%A6%E5%88%86%E7%B1%BB1.rpx&rpxHome=D%3A%2Fraqsoft%2Freport%2Fweb%2Fwebapps%2Fdemo%2FWEB-INF%2FreportFiles&dfxHome=',
      iframeWin: {}
    }
  },
  methods: {
    sendMessage () {
      console.log(111111)
      // 外部vue向iframe内部传数据
      this.iframeWin.postMessage({
        params: {
          name: 'account_2334',
          id: '2334'
        }
      }, '*')
    },
    handleMessage (event) {
      // 根据上面制定的结构来解析iframe内部发回来的数据
      const data = event.data
      console.log(data, 'handleMessage')
    }
  },
  mounted () {
    // 在外部vue的window上添加postMessage的监听，并且绑定处理函数handleMessage
    window.addEventListener('message', this.handleMessage)
    this.iframeWin = this.$refs.iframe.contentWindow
  },
  destroyed () {
    window.removeEventListener()
  }
}
</script>
