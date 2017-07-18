<template>
  <div>
    <div class="container">
      <div class="title-top">
        <div class="title">一日猫商务合作登记表</div>
        <div class="line"></div>
      </div>
      <!--title end-->
      <form action="">
        <div class="form-item">
          <label for="identity"><span class="danger">*</span>身份类型</label>
          <select v-model="form.storeType">
            <!--<option value="" disabled selected>请选择您的身份类型</option>-->
            <option v-for="item in identity" :value="item.storeType" :key="item.storeType">{{item.identity}}</option>
          </select>
        </div>

        <div class="form-item">
          <label for="category"><span class="danger">*</span>合作意向</label>
          <select v-model="form.intentionType">
            <!--<option value="" disabled selected>请选择要合作的类别</option>-->
            <option v-for="item in category" :value="item.intentionType" :key="item.intentionType" >{{item.category}}</option>
          </select>
        </div>

        <div class="form-item">
          <label for="name"><span class="danger">*</span>姓名</label>
          <input name="name" v-model="form.username" placeholder="请输入您的姓名">
        </div>

        <div class="form-item">
          <label for="cellphone"><span class="danger">*</span>手机号</label>
          <input name="cellphone" v-model="form.tel" placeholder="请输入联系人的手机号">
        </div>

        <div class="form-item">
          <label for="shop"><span class="danger">*</span>公司/店铺</label>
          <input name="shop" v-model="form.storeName" placeholder="请输入您所在的公司或店铺名">
        </div>

        <div class="form-item">
          <label for="duties"><span class="danger">*</span>职务</label>
          <input name="title" v-model="form.position" placeholder="请输入您的职务">
        </div>

        <!--<div class="form-item">
          <label for="area">所在地区</label>
          <select name="area" v-model="form.area">-->
            <!--<option value="" disabled selected>请选择</option>-->
            <!--<address-picker v-model="addressValue" @change="addressChange" class="fl"></address-picker>
            <option v-for="item in area" :value="item.area" :key="item.area" :label="item.area">{{item.name}}</option>
          </select>
        </div>-->
        <div class="form-item area">
          <div class="local">
            <label for="province"><span class="danger">*</span>省份</label>
            <select v-model="form.provinceCode" @change="getCityList(form.provinceCode)">
              <option v-for="item in province" :value="item.code" :key="item.code">{{item.name}}</option>
            </select>
          </div>
          <div class="local local-city">
            <label for="area">城市</label>
            <select v-model="form.cityCode" @click="handleJudge(1)" @change="getDistrictList(form.cityCode)">
              <option v-for="item in city" :value="item.code" :key="item.code" >{{item.name}}</option>
            </select>
          </div> 
          <div class="local">
            <label for="area">区县</label>
            <select v-model="form.districtCode" @click="handleJudge(2)">
              <option v-for="item in distrct" :value="item.code" :key="item.code">{{item.name}}</option>
            </select>
          </div> 
        </div>
      </form>

      <div class="claim"><span class="danger">*</span>为必填项，请如实填写，便于一日猫与您联系</div>
      <button class="submit" type="button" @click="onSubmit">提交</button>

    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      area: [],
      form: {
        storeType: '',
        intentionType: '',
        username: '',
        tel: '',
        storeName: '',
        position: '',
        provinceCode: '',
        cityCode: '',
        districtCode: ''
      },
      identity: [
        {
          storeType: 1,
          identity: '天猫商城卖家'
        },
        {
          storeType: 2,
          identity: '淘宝金牌卖家（连续八期）'
        },
        {
          storeType: 3,
          identity: '宠物用品品牌商'
        }
      ],
      category: [
        {
          intentionType: 1,
          category: '免费领'
        },
        {
          intentionType: 2,
          category: '特价购'
        },
        {
          intentionType: 3,
          category: '老用户专享'
        }
      ],
      province: [],
      city: [],
      distrct: []
    }
  },
  methods: {
    handleJudge (index) {
      if (index === 1) {
        if (!this.form.provinceCode) {
          MessageBox('请选择省份！')
        }
      } else if (index === 2) {
        if (!this.form.cityCode) {
          MessageBox('请选择城市！')
        }
      }
    },
    getProvinceList () {
      this.$post('provinceList').then(resp => {
        if (resp.status === this.$SUCCESS) {
          this.province = resp.data
          this.$forceUpdate()
        }
      })
    },
    getCityList (provinceCode) {
      this.$post('cityList', {
        provinceCode: provinceCode
      }).then(resp => {
        if (resp.status === this.$SUCCESS) {
          this.city = resp.data
        }
      })
    },
    getDistrictList (cityCode) {
      this.$post('districtList', {
        cityCode: cityCode
      }).then(resp => {
        if (resp.status === this.$SUCCESS) {
          this.distrct = resp.data
        }
      })
    },
    onSubmit () {
      if (!this.form.storeType) {
        MessageBox('请选择您的身份类型！')
      } else if (!this.form.intentionType) {
        MessageBox('请选择要合作的意向！')
      } else if (!this.form.username) {
        MessageBox('请输入您的姓名！')
      } else if (!this.form.tel) {
        MessageBox('请输入您的手机号！')
      } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.form.tel))) {
        MessageBox('请输入正确的手机号码！')
      } else if (!this.form.provinceCode) {
        MessageBox('请选择省份！')
      } else if (!this.form.cityCode) {
        MessageBox('请选择城市！')
      } else if (!this.form.districtCode) {
        MessageBox('请选择区县！')
      } else {
        this.$post('businessCooperationCreate', this.form).then(resp => {
          if (resp.status === this.$SUCCESS) {
            // Toast({
            //   message: '提交成功',
            //   position: 'middle',
            //   duration: 3000
            // })
            MessageBox({
              title: '提示',
              message: '提交成功',
              showConfirmButton: true
            })
            this.$router.back()
          }
        })
      }
    }
  },
  mounted () {
    this.getProvinceList()
  }
}
</script>

<style scoped>
/*省市区*/
.area {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
}
.area .local {
  width: 33%;
}
.area .local-city {
  margin: 0 2px;
}
/*.area option {
  color: red;
}*/


.container {
  padding: 10px 20px;
  max-width: 750px;
  margin: 0 auto;
}

.title-top {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 40px;
  margin-bottom: 20px;
  line-height: 14px;
}
.title{
  position: absolute;
  top: 20px;
  left: 0;
  width: 150px;
  font-size: 14px;
  font-weight: bold;
  color: #8d5fa9;
  background-color: #fff;
  z-index: 10;
}

.line {
  width: 100%;
  height: 0;
  content: '';
  border-top: 1px solid #e5e5e5;
  -webkit-transform: translateY(-13px);
  transform: translateY(-13px);
}
.form {
  padding-bottom: 15px;
}

.form-item {
  position: relative;
  width: 100%;
}

label {
  display: block;
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 14px;
  color: #777;
}

.danger {
  /*position: absolute;*/
  /*top: 50px;
  left: 570px;*/
  padding-right: 2px;
  font-size: 14px;
  color: #F33D66;
}

input,
select {
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  text-indent: 6px;
  font-size: 16px;
  outline: none;
  box-shadow: none;
}
/*设置input中placeholder的字体颜色*/
:-webkit-input-placeholder {
  color: #ccc;
}
:-moz-placeholder {
  color: #ccc;
}
:-ms-input-placeholder {
  color: #ccc;
}

/*input {
  color: #ccc!important;
}*/

input,
input:focus,
input:active {
  user-select: text;
}
.claim {
  line-height: 16px;
  font-size: 12px;
  color: #777;
  text-align: center;
  margin-bottom: 26px;
}
/*提交*/
.submit {
  width: 100%;
  height: 47px;
  line-height: 47px;
  background: #966dad;
  border-radius: 8px;
  border: none;
  margin-bottom: 20px;
  color: #fff;
  font-size: 18px;
  text-align: center;
}
</style>
