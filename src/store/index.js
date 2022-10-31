import { defineStore } from "pinia";

//1.定义容器
export const userMainStore = defineStore("test", {
	state: () => {

		return {
			count: 100
		}
	},
	getters: {},
	actions: {}
})

export const homeMenuStore = defineStore("main", {
	state: () => {
		return {
			//在线人数
			online: 0,
			//菜单
			menus: [
				{
					id: 0,
					type: 'region1',
					time: 20,
					text: '在线匹配',
					background: 'rgb(22, 199, 114)',
					hot: true,
					hrefName: 'Matching',
					matchingType: 1
				},
				{
					id: 2,
					type: 'region1',
					time: 10,
					text: '随机匹配',
					background: 'rgb(22, 199, 214)',
					hot: true,
					hrefName: 'Matching',
					matchingType: 2
				},
				{
					id: 1,
					type: 'region2',
					childMenu: [
						{
							id: 0,
							time: 10,
							text: '小酒馆',
							background: 'rgb(141,121,216)',
							hot: true,
							hrefName: 'Matching',
							matchingType: 3
						},
						{
							id: 1,
							text: '聊天室',
							showTip: '快来吧，大家在等你',
							background: "rgb(253,129,107)",
							hot: false,
							hrefName: ''
						},
					]
				},
				{
					id: 3,
					type: 'region2',
					childMenu: [
						{
							id: 0,
							time: 10,
							text: '地区匹配',
							background: 'rgb(41,121,216)',
							hot: true,
							hrefName: ''
						},
						{
							id: 1,
							time: 10,
							text: '兴趣匹配',
							background: "rgb(253,89,107)",
							hot: false,
							hrefName: ''
						},
					]
				},

			],
			tabbarItems: [
				{
					id: 0,
					icon: 'home-o',
					name: 'Home',
					text: "首页"
				},
				{
					id: 1,
					icon: 'user-o',
					name: 'Mine',
					text: "我的"
				}
			]
		}
	},
	getters: {
	},
	actions: {}
})
//2.使用容器中的 state (●'◡'●)
//3.修改state
//4. action中使用