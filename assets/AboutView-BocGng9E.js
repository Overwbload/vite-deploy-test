import{_ as a,c as s,a as n,t as c,b as r,o as l}from"./index-QxLAkJx3.js";const d={data(){return{data:{}}},mounted(){console.log("這是產品的環境"),this.$http.get("https://randomuser.me/api/").then(t=>{console.log(t),this.data=t.data.results[0],console.log(this.data)})}},i={class:"about"},u=r("h1",null,"This is an about page",-1);function p(e,t,_,h,o,m){return l(),s("div",i,[u,n(" "+c(o.data),1)])}const g=a(d,[["render",p]]);export{g as default};
