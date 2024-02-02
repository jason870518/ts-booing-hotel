/**
* 全局 loading效果：合併多次 loading請求，避免重複請求
* 當調用一次 showLoading，則次數 +1;當次數當次數為 0時，則顯示 loading
* 當調用一次 hideLoading，則次數 -1;當次數當次數為 0時，則結束 loading
*/
import { createApp, reactive } from 'vue'
import myLoad from '@/components/Loading/Loading.vue'

// 定義一個請求次數的變數，用來記錄當前頁面總共請求的次數
let loadingRequestCount = 0

const msg = reactive({
	show: false,
	title: 'loading...'
})

const $loading = createApp(myLoad, { msg }).mount(document.createElement('div'))
const load = {
	show(title: any = msg.title) { 	// 控制顯示 loading的方法
		msg.show = true
		msg.title = title
		document.body.appendChild($loading.$el)
	},

	hide() { 	// 控制 loading隱藏的方法
		msg.show = false
	}
}

export  { load }

// 編寫一個顯示 loading的函數，並且記錄請求次數 ++
const showLoading = () => {
    if (loadingRequestCount === 0) {
        // 	element的服務方式 target 我這邊取的是表格class
        // 	類似整個表格 loading和在表格配置 v-loading一樣的效果，這麼做是全局實現了，不用每個頁面單獨去 v-loading
        // 	loadingInstance = ElLoading.service({ target, text: '加載中...', background: 'rgba(0, 0, 0, 0.8)'});
        load.show()
    }

    loadingRequestCount++
}

// 縮寫一個隱藏 loading的函數，並且記錄請求次數 --
const hideLoading = () => {
    if (loadingRequestCount <= 0) return

    loadingRequestCount--

    if (loadingRequestCount === 0) {
      	load.hide()
    }
}

export {
    showLoading,
    hideLoading
}
