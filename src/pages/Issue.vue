<template>
  <div>
    <div class="content">
      <div class="title">常见问题</div>
      <ul class="issue-list">
        <li v-for="(item, index) in issue">
          <div class="question" @click="toggleActive(index)">
            <span class="danger">Q{{index + 1}}：</span>
            <span class="detail">{{item.question}}</span>
            <span class="icon" :class="{active: item.active === true}">
              <img src="../../static/images/online_retailers/iconB.png" alt="icon">
            </span>
          </div>
          <p class="answer" v-if="item.active">
            {{item.answer}}
          </p>
        </li>
      </ul>
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
          answer: '答：除了级别是天猫、连续8年金牌卖家、品牌商的要求，还必须具备相应行业资质，合法经营，主动提供所需材料给一日猫。',
          active: false
        },
        {
          question: '合作业务范围？',
          answer: '答：猫咪类宠物用品包括主粮、零食、日用、玩具、保健、医疗、出行、装扮、美容、洗护。猫咪类文化用品如猫咪文化衫等。',
          active: false
        },
        {
          question: '合作需要交纳保证金吗？',
          answer: '答：每个商户合作需要缴纳3000元的保证金，保证金的具体使用和管理规则详情见《一日猫商户合作协议》。',
          active: false
        },
        {
          question: '每单的服务费金额是怎么确定的？',
          answer: '答：单笔服务费是根据商品的性质和价格，以及商户月订单数量来定的。最后以单价乘以实际成交订单收取总服务费。',
          active: false
        },
        {
          question: '合作业务范围',
          answer: '答：我们会根据合作方需要，动态放量、补量。',
          active: false
        },
        {
          question: '老用户专享和特价购有什么区别？',
          answer: '答：特价购是只要满足合作要求的商户就能参与，而老用户专享是为在免费领或特价购合作的基础上，月订单已超过3000单的合作商免费开通的，合作商需接受并履行一日猫提出的引流方案。',
          active: false
        },
        {
          question: '服务费可以开发票吗？',
          answer: '答：月服务费超过5万的商户可向一日猫申请发票，一日猫有义务开具3%的增值税普通发票。收取的服务费如果又返还的，则一日猫不开具发票，已经开具的，商户应按相应的流程退还发票。',
          active: false
        }
      ]
    }
  },
  methods: {
    toggleActive (index) {
      this.issue[index].active = !this.issue[index].active
    }
  }
}
</script>
<style scoped>
.content {
  padding-top: 30px;
  max-width: 750px;
  margin: 0 auto;
}

.title {
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 30px;
  color: #111;
  text-align: center;
}

.issue-list li {
  position: relative;
  /*height: 41px;*/
  overflow: hidden;
}

.issue-list li .question{
  /*height: 40px;*/
  margin-left: 15px;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  border-bottom: .5px solid #e5e5e5;
  font-size: 14px;
  line-height: 20px;
  color: #333;
}

.danger {
  float: left;
  display: block;
  max-width: 40px;
  height: 100%;
  color: #FF7A9A;
}

@media screen and (max-width: 768px) {
  .danger {
    width: 11.60%;
  }
}

.icon {
  position: absolute;
  top: 14px;
  right: 15px;
  color: #C7C7CB;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  cursor: pointer;
}

.icon img {
  display: block;
  width: 6px;
  height: 11px;
}

.active {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.detail {
  display: inline-block;
  width: 88.4%;
}

.answer {
  padding: 15px;
  font-size: 12px;
  line-height: 18px;
  color: #777;
}
</style>
