<template>
  <div>
    <div class="container">
      <div class="logo-image">
        <img src="../../static/images/online_retailers/logo.png" alt="一日猫">
      </div>

      <div class="content block">
        <div class="advantage">
          <h3 class="black-title">平台优势</h3>
          <ul class="advantage-list clearfix">
            <li v-for="item in advantage">
              <div class="list-info">
                <p class="adva-title">{{item.advaTitle}}</p>
                <div class="adva-content">{{item.advantage}}</div>
              </div>
              <div class="list-icon">
                <img :src="item.advanIcon" alt="">
              </div>
            </li>
          </ul>
        </div>
        <!--平台优势 end-->

        <div class="info block">
          <h3 class="black-title">平台数据</h3>
          <ul class="info-list clearfix">
            <li v-for="item in info">
              <div class="list-info">
                <img :src="item.infoIcon" alt="">
                <p class="info-title">{{item.infoTitle}}</p>
                <p class="info-content">{{item.infoContent}}</p>
              </div>
            </li>
          </ul>
        </div>
        <!--平台数据 end-->

        <div class="award block">
          <h3 class="black-title">应用获奖</h3>
          <p class="small-title">来自各大应用商店和榜单的肯定</p>
          <ul class="award-list clearfix">
            <li v-for="item in awardList">
              <div class="list-award">
                <img :src="item.awardIcon" alt="">
                <p class="small-title">{{item.awardTitle}}</p>
                <div v-if="item.show"><a :href="item.awardUrl" class="view-detail">查看详情</a></div> 
              </div>
            </li>
          </ul>
        </div>
        <!--应用获奖 end-->

        <div class="exposure block">
          <h3 class="black-title">媒体曝光</h3>
          <p class="small-title">来自众多媒体平台的肯定</p>
          <ul class="exposure-list clearfix">
            <li v-for="item in exposure">
              <div class="item">
                <img :src="item.exposureIcon" :alt="item.exposureIcon"
                class="distance">
                <div class="title">{{item.exposureTitle}}</div>
                <div><a :href="item.exposureUrl" class="view-detail">查看详情</a></div>
              </div>
            </li>
          </ul>
        </div>
        <!--媒体曝光 end-->

        <div class="partner block">
          <div class="top partner-top">
            <h3 class="white-title">合作对象</h3>
            <div class="triangle"></div>
            <ul class="partner-list clearfix">
              <li v-for="item in partner">
                <div class="list-partner">
                  <img :src="item.partnerIcon" alt="">
                  <p class="partnertitle"> {{item.partnerTitle}}</p>
                  <div v-if="item.show" class="partner-show">(连续八期)</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--合作对象 end-->

        <div class="income block">
          <div class="top income-top">
            <h3 class="white-title">商家收益</h3>
            <div class="triangle"></div>
            <ul class="income-list clearfix">
              <li v-for="item in income">
                <div class="income-icon">
                  <img :src="item.incomeIcon" alt="">
                </div>
                <div class="income-info">
                  <p class="income-title">{{item.incomeTitle}}</p>
                  <div class="income-content">{{item.incomeContent}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--商家收益 end-->

        <div class="category block">
          <div class="top category-top">
            <h3 class="white-title">合作类别</h3>
            <div class="triangle"></div>
            <ul class="category-list clearfix">
              <li v-for="(item, index) in category">
                <div class="list-category">
                  <img :src="item.categoryIcon" alt="">
                  <p class="category-title">{{item.categoryTitle}}</p>
                  <button class="view-detail" @click="popupBlock(index)">查看详情</button>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div></div>
          </div>
        </div>
        <!--合作类别 end-->

        <div class="process block">
          <div class="top process-top">
            <h3 class="white-title">合作流程</h3>
            <div class="triangle"></div>
            <div class="cooperationProcess">
              <img src="../../static/images/online_retailers/cooperationProcess.jpg" alt="">
            </div>
          </div>
        </div>
        <!--合作流程 end-->

        <div class="trademark block">
          <div class="top trademark-top">
            <h3 class="white-title">合作品牌</h3>
            <div class="triangle"></div>
            <ul class="trademark-list clearfix">
              <li v-for="item in trademark">
                <div class="trademark-icon">
                  <img :src="item.trademarkIcon" alt="">
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--合作品牌 end-->

        <div class="questions block">
          <h3 class="black-title">常见问题</h3>
          <ul class="issue-list clearfix">
            <li v-for="(item, index) in issue">
              <div class="question" @click="toggleActive(index)">
                <span class="danger">Q{{index + 1}}：</span>
                <span class="detail">{{item.question}}</span>
              </div>
              <div class="answer">
                <p>{{item.answer}}</p>
              </div>
            </li>
          </ul>
          <button class="more-btn" @click="viewMore">查看更多</button>
        </div>
        <!--常见问题 end-->

        <div class="contact" @click="Contact">
          <span>联系我们</span>
        </div>
        <!--联系我们 end-->
      </div>
    </div>

    <!--弹窗-->
    <div v-show="isShow" class="popup">
      <!--<ul class="popup">-->
      <div class="popup-content">
        <div class="popup-title">
          <span class="pop-title">{{popup.title}}</span>
          <span class="pop-close" @click="close()">&times</span>
        </div>
        <div class="popup-top">
          <p class="pop-content">{{popup.content}}</p>
          <div class="pop-bottom">
            <p class="pop-content"><span class="pop-sidetitle">{{popup.Booth}}</span>{{popup.boothContent}}</p>
            <p class="pop-content"><span class="pop-sidetitle">{{popup.Updete}}</span>{{popup.updateContent}}</p>
            <p class="pop-content"><span class="pop-sidetitle">{{popup.Dynamic}}</span>{{popup.dynamicContent}}</p>
            <p class="pop-content"><span class="pop-sidetitle">{{popup.ServiceCharge}}</span>{{popup.serviceContent}}</p>
          </div>
        </div>
      </div>
      <!--</ul>-->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      issue: [
        {
          question: '平台对合作商家有什么要求？',
          answer: '答：除了级别是天猫、连续8年金牌卖家、品牌商的要求，还必须具备相应行业资质，合法经营，主动提供所需材料给一日猫。'
        },
        {
          question: '合作业务范围？',
          answer: '答：猫咪类宠物用品包括主粮、零食、日用、玩具、保健、医疗、出行、装扮、美容、洗护。猫咪类文化用品如猫咪文化衫等。'
        },
        {
          question: '合作需要交纳保证金吗？',
          answer: '答：每个合作需要缴纳3000元的保证金，保证金的具体使用和管理规则详情见《一日猫商户合作协议》。'
        }
      ],
      info: [
        {
          infoIcon: '../../static/images/online_retailers/download.png',
          infoTitle: '下载量',
          infoContent: '下载量30W+'
        },
        {
          infoIcon: '../../static/images/online_retailers/active.png',
          infoTitle: '日活跃度',
          infoContent: '日活峰值2W+'
        },
        {
          infoIcon: '../../static/images/online_retailers/avantar.png',
          infoTitle: '用户画像',
          infoContent: '80~90后 高素质青年用户女性占比70%'
        },
        {
          infoIcon: '../../static/images/online_retailers/exchange.png',
          infoTitle: '转化率',
          infoContent: '0.2%~9.9%不等的销售转化率'
        }
      ],
      advantage: [
        {
          advaTitle: '专注猫咪产品',
          advantage: '一日猫只专注猫咪垂直行业，在优质商家和优质用户之间搭建一道桥梁',
          advanIcon: '../../static/images/online_retailers/adv-1.png'
        },
        {
          advaTitle: '海量活跃用户',
          advantage: '一日猫每日有数万优质粘性用户，用户还在持续增长中',
          advanIcon: '../../static/images/online_retailers/adv-2.png'
        },
        {
          advaTitle: '精准用户画像',
          advantage: '核心用户集中于养猫、爱猫的85-95后（女性70%）。为猫，买买买！',
          advanIcon: '../../static/images/online_retailers/adv-3.png'
        },
        {
          advaTitle: '电商转化率高',
          advantage: '极其垂直的渠道保障了优质商品和活动的转化率，现已合作了数十家品牌和商家',
          advanIcon: '../../static/images/online_retailers/adv-4.png'
        }
      ],
      awardList: [
        {
          awardIcon: '../../static/images/online_retailers/award-1.png',
          awardTitle: '金米奖',
          awardUrl: 'https://zhuanlan.zhihu.com/p/24866699',
          show: true
        },
        {
          awardIcon: '../../static/images/online_retailers/award-2.png',
          awardTitle: '最美应用',
          awardUrl: 'http://zuimeia.com/app/4834/?platform=1',
          show: true
        },
        {
          awardIcon: '../../static/images/online_retailers/award-3.png',
          awardTitle: '极光奖',
          awardUrl: 'http://hf.appstore.vivo.com.cn/val/jiguang32/appstore/index?shareAppid=330&source=1',
          show: true
        },
        {
          awardIcon: '../../static/images/online_retailers/award-4.png',
          awardTitle: '搜狗好应用',
          show: false
        }
      ],
      exposure: [
        {
          exposureIcon: '../../static/images/online_retailers/exposure-1.png',
          exposureTitle: '猎云网',
          exposureUrl: 'http://www.lieyunwang.com/archives/272095'
        },
        {
          exposureIcon: '../../static/images/online_retailers/exposure-2.png',
          exposureTitle: '铅笔道',
          exposureUrl: 'http://www.lieyunwang.com/archives/272095'
        },
        {
          exposureIcon: '../../static/images/online_retailers/exposure-3.png',
          exposureTitle: 'Pingwest',
          exposureUrl: 'http://www.pingwest.com/one-day-cat/'
        },
        {
          exposureIcon: '../../static/images/online_retailers/exposure-4.png',
          exposureTitle: '全媒派',
          exposureUrl: 'https://mp.weixin.qq.com/s?src=3&timestamp=1500021035&ver=1&signature=Pv8qf67hO-AGUJlpgH7eA4RZsoW-OfNHdSaXzCrcr2Sb7Lwocqdp6V9KsM3c2CcGqTWAOXhaseIkaAv6wP3miC8CILr40g5tLPbjtkc-GE4TUtYyVYWMSO1q*t6Qd0aBq6KzqPNse3XBgb0Y2J26z4X450l4obeC08bPfr2Obmg='
        },
        {
          exposureIcon: '../../static/images/online_retailers/exposure-5.png',
          exposureTitle: '搜狐网',
          exposureUrl: 'http://www.sohu.com/a/121344842_544868'
        },
        {
          exposureIcon: '../../static/images/online_retailers/exposure-6.png',
          exposureTitle: '泛钛氪',
          exposureUrl: 'http://www.vantk.com/discussion/3290'
        }
      ],
      partner: [
        {
          partnerIcon: '../../static/images/online_retailers/tmail.png',
          partnerTitle: '天猫商城'
        },
        {
          partnerIcon: '../../static/images/online_retailers/coldenPrize.png',
          partnerTitle: '金牌卖家',
          show: true
        },
        {
          partnerIcon: '../../static/images/online_retailers/goodBrand.png',
          partnerTitle: '优秀品牌商'
        }
      ],
      income: [
        {
          incomeIcon: '../../static/images/online_retailers/newGoods.png',
          incomeTitle: '新品打造',
          incomeContent: '利用精准海量一日猫用户群，专为无流量，无累积，初上市的新品做引流'
        },
        {
          incomeIcon: '../../static/images/online_retailers/accurateAvatar.png',
          incomeTitle: '精准画像引流',
          incomeContent: '一日猫专注精准养猫用户，杜绝低质无效流量，只给商家店铺画像最匹配的精准用户'
        },
        {
          incomeIcon: '../../static/images/online_retailers/inventoryClear.png',
          incomeTitle: '清库存，拉排名',
          incomeContent: '基于平台的优势，大折扣产品可以极低地成本完成库存销售，提高产品电商排名和提高相关电商指数'
        },
        {
          incomeIcon: '../../static/images/online_retailers/regularCustomer.png',
          incomeTitle: '店铺专属老用户版块',
          incomeContent: '深度合作商家独享，开辟老用户专享版块，拉动整个店铺的闲置流量，提高产品复购率'
        },
        {
          incomeIcon: '../../static/images/online_retailers/stage.png',
          incomeTitle: '专场全平台活动',
          incomeContent: '深度合作商家独享，完成一定合作量，即可享受针对全平台用户的专享活动（服务费全免）'
        }
      ],
      category: [
        {
          categoryIcon: '../../static/images/online_retailers/freePresent.png',
          categoryTitle: '免费领'
        },
        {
          categoryIcon: '../../static/images/online_retailers/discount.png',
          categoryTitle: '特价够'
        },
        {
          categoryIcon: '../../static/images/online_retailers/private.png',
          categoryTitle: '老用户专享'
        }
      ],
      trademark: [
        {
          trademarkIcon: '../../static/images/online_retailers/cooperative-brand-01.png'
        },
        {
          trademarkIcon: '../../static/images/online_retailers/cooperative-brand-02.png'
        },
        {
          trademarkIcon: '../../static/images/online_retailers/cooperative-brand-03.png'
        },
        {
          trademarkIcon: '../../static/images/online_retailers/cooperative-brand-04.png'
        },
        {
          trademarkIcon: '../../static/images/online_retailers/cooperative-brand-05.png'
        },
        {
          trademarkIcon: '../../static/images/online_retailers/cooperative-brand-06.png'
        },
        {
          trademarkIcon: '../../static/images/online_retailers/cooperative-brand-07.png'
        },
        {
          trademarkIcon: '../../static/images/online_retailers/cooperative-brand-08.png'
        },
        {
          trademarkIcon: '../../static/images/online_retailers/cooperative-brand-09.png'
        }
      ],
      isShow: false,
      popup: {},
      popupbox: [
        {
          title: '免费领',
          content: '商家按自然月提供500~5000单商品，一日猫平台引导优质宠物用户来免费领取合作的商品，相应提高商家电商指数。',
          Booth: '严控展位：',
          boothContent: '每个仅4个展位，确保单品转化率',
          Updete: '定期更新：',
          updateContent: '保证良性用户体验',
          Dynamic: '动态放量：',
          dynamicContent: '根据合作方时间需要，动态放量、补量',
          ServiceCharge: '服务费：',
          serviceContent: '每单4~15元，活动期间前1000单免服务费'
        },
        {
          title: '特价购',
          content: '商家按自然月提供500~5000单商品，一日猫平台引导优质宠物用户以专享价或返现下单合作的商品，相应提高商家电商指数。',
          Booth: '严控展位：',
          boothContent: '每个仅4个展位，确保单品转化率',
          Updete: '定期更新：',
          updateContent: '保证良性用户体验',
          Dynamic: '动态放量：',
          dynamicContent: '根据合作方时间需要，动态放量、补量',
          ServiceCharge: '服务费：',
          serviceContent: '每单4~15元，活动期间前1000单免服务费'
        },
        {
          title: '老用户专享',
          content: '月合作订单超过3000单的合作商，免费开通老用户专享。旨在激活合作商老用户，提供一个持续维系老用户的专享平台，提高关键电商指数。合作商接受平台提出的引流方案。',
          Booth: '严控展位：',
          boothContent: '每期仅1个展位，确保单品转化率',
          Updete: '定期更新：',
          updateContent: '保证良性用户体验',
          Dynamic: '动态放量：',
          dynamicContent: '根据合作方时间需要，动态放量、补量',
          ServiceCharge: '服务费：',
          serviceContent: '免服务费，商家帮助平台引流1万用户以上赠送活动专场+全网推送'
        }
      ]
    }
  },
  methods: {
    viewMore () {
      this.$router.push('/issue')
    },
    Contact () {
      this.$router.push('/contact')
    },
    popupBlock (index) {
      this.popup = {}
      this.popup = this.popupbox[index]
      this.isShow = true
    },
    close () {
      this.isShow = false
    }
  },
  mounted () {
    this.popup = this.popupbox[0]
    document.body.clientHeight
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
}
.content {
  text-align: center;
}

.block {
  padding-top: 30px;
}

h3 {
  font-weight: 500;
}

.black-title {
  font-size: 24px;
  color: #111;
  text-align: center;
  margin-bottom: 10px;
}

.white-title {
  font-size: 20px;
  padding-top: 10px;
}

.top {
  position: relative;
  height: 50px;
  width: 100%;
}

.triangle {
  position: absolute;
  left: 48%;
  bottom: -6px;
  width:0;    
  height:0;
  content: '';
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 16px solid #fff;
  border-top: 0 solid transparent;
}
/*标题颜色 start*/
.partner-top {
  background: #f28383;
}
.income-top {
  background: #f0a864;
}
.category-top {
  background: #67b59f;
}
.process-top {
  background: #7e9fcc;
}
.trademark-top {
  background: #a98fc0;
}

/*logo start*/
.logo-image img {
  display: block;
  width: 100%;
}

/*平台优势 start*/
.advantage-list > li {
  height: 97px;
  border-bottom: .5px solid #e5e5e5;
  text-align: left;
  padding: 20px 15px;
}
.advantage-list .list-info {
  float: left;
  width: 78.26%;
  padding: 20px 0;
}
.advantage-list .list-info > .adva-title {
  line-height: 20px;
  font-size: 18px;
  color: #333;
}
.advantage-list .list-info > .adva-content {
  line-height: 16px;
  font-size: 12px;
  color: #777;
  margin-top: 6px;
}
.advantage-list .list-icon {
  float: right;
}
.list-icon > img {
  display: block;
  width: 60px;
  margin-top: 25px;
}

/*平台数据 start*/
.info {
  height: 470px;
  background: #f9f9f9;
}
.info-list > li {
  width: 50%;
  float: left;
  margin: 20px 0 20px 0;
}
.info-title {
  font-size: 16px;
  color: #333;
  line-height: 20px;
}
.info-content {
  font-size: 12px;
  color: #777;
  line-height: 18px;
}

/*应用获奖 start*/
.small-title {
  font-size: 12px;
  color: #777;
  line-height: 22px;
}
.award-list { 
  padding: 34px 15px 0;
  height: 90px;
}
.award-list > li {
  width: 25%;
  float: left;
}
.list-award > img {
  width: 40px;
}
.view-detail {
  border: 1px solid #1e8be5;
  border-radius: 24px;
  height: 22px;
  width: 68px;
  font-size: 12px;
  color: #1e8be5;
  line-height: 22px;
  text-align: center;
  background: #fff;
}

/*媒体曝光 start*/
.exposure-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 15px;
}
.exposure-list > li {
  width: 33%;
  margin-top: 30px;
  /*margin-left: 5px;*/
  text-align: center;
}

.exposure-list > li .item {
  margin: 0 22px;
}
.exposure-list > li img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
}

.exposure-list .view-detail {
  margin: 0 auto;
}

.exposure-list .title {
  margin-bottom: 10px;
  color: #777;
  font-size: 12px;
}

.exposure-list > li .distance {
  margin-bottom: 16px;
}

.list-exposure {
  text-align: center;
  height: 189px;
  width: 80%;
  margin-left: 10px;
}
.list-exposure > img {
  width: 100%;
}

/*合作对象*/
.partner {
  height: 160px;
}
.partner-list {
  padding: 34px 15px 0;
}
.partner-list > li {
  width: 33%;
  float: left;
}
.list-partner > img {
  width: 60px;
  height: 60px;
}
.partnertitle {
  font-size: 14px;
  color: #333;
  line-height: 20px;
}
.partner-show {
  font-size: 12px;
  color: #777;
  line-height: 20px;
}

/*商家收益*/
.income {
  height: 560px;
  margin-bottom: 30px;
}
.income-list > li {
  height:60px;
  padding: 20px 15px;
  /*display: inline-block;*/
}
.income-icon {
  float: left;
  margin: 25px 10px 0 0;
}
.income-icon > img {
  display: block;
  width: 60px;
}
.income-info {
  float: left;
  width: 75%;
  text-align: left;
  padding: 25px 0;
}
.income-title {
  /*margin-top: 15px;*/
  line-height:18px;
  font-size: 16px;
  color: #111;
}
.income-content {
  line-height: 18px;
  font-size: 12px;
  color: #777;
}

/*合作类别*/
.category {
  height: 190px;
}
.category-list {
  padding: 34px 15px 0;
}
.category-list > li {
  width: 33%;
  float: left;
}
.list-category > img {
  width: 60px;
  height: 60px;
}
.category-title {
  font-size: 14px;
  color: #333;
  line-height: 20px;
}

/*合作流程*/
.process {
  /*height: 390px;*/
  display: inline-block;
}
.cooperationProcess {
  padding: 0 15px;
}
.cooperationProcess img {
  display: block;
  width: 100%;
  float: left;
  margin: 30px 0;
}

/*合作品牌 start*/
.trademark {
  display: inline-block;
  /*overflow: hidden;*/
  /*margin-bottom: 30px;*/
}
.trademark-list {
  padding-top: 30px;
}
.trademark-list > li {
  margin: 20px 0;
  height: 50px;
  width: 32%;
  float: left;
}
.trademark-icon {
  display: inline-block;
  width: 80%;
}
.trademark-icon > img {
  display: block;
  width: 100%;
}

/*常见问题 start*/
.questions {
  margin-bottom: 60px;
}
.issue-list li {
  position: relative;
  overflow: hidden;
  padding: 0 15px;
}

.issue-list li .question {
  font-size: 16px;
  line-height: 20px;
  color: #333;
  text-align: left;
  letter-spacing: 0;
  margin-top:  30px;
}

.danger {
  color: #8d5fa9;
}

.answer {
  padding: 5px 0;
  font-size: 12px;
  color: #777;
  letter-spacing: 0;
  line-height: 13px;
  text-align: justify;
}

.more-btn {
  width: 120px;
  height: 28px;
  border: 1px solid #8d5fa9;
  border-radius: 32px;
  background: #fff;
  color: #8d5fa9;
  margin: 20px auto;
}

/*联系我们 start*/
.contact {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  line-height: 50px;
  max-width: 750px;
  background: #966dad;
  text-align: center;
  margin: 0 auto;
  font-size: 18px;
  color: #fff; 
}

/*弹框 start*/
.popup {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 750px;
  margin: 0 auto;
  padding-top: 16px;
  text-align: center;
  background-color: rgba(0, 0, 0, .5)
}

.popup-content {
  position: absolute;
  top: 108px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 346px;
  background-color: #fff;
  padding: 6px 15px 78px;
  border-radius: 20px;
}
.popup-title {
  border-bottom: 1px solid #e5e5e5;
  padding: 10px 0;
}
.popup-title .popup-title {
  font-size: 18px;
  color: #111;
  text-align: center;
}
.popup-title .pop-close {
  position: absolute;
  top: 12px;
  right: 12px;
  text-align: right;
  font-size: 24px;
  color: #999;
  cursor: pointer;
} 
.popup-top {
  padding: 20px 10px 0;
  font-size: 14px;
  line-height: 22px;
  text-align: left;
}
.popup-top .pop-content {
  color: #333; 
}
.pop-bottom {
  margin-top: 20px;
}
.popup-top .pop-sidetitle {
  color: #f33d66;
}
</style>
