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
          <select name="identity" v-model="form.identity">
            <!--<option value="" disabled selected>请选择您的身份类型</option>-->
            <option v-for="item in identity" :value="item.identity" :key="item.identity" :label="item.identity">{{item.name}}</option>
          </select>
        </div>

        <div class="form-item">
          <label for="category"><span class="danger">*</span>合作品类</label>
          <select name="category" v-model="form.category">
            <!--<option value="" disabled selected>请选择要合作的类别</option>-->
            <option v-for="item in category" :value="item.category" :key="item.category" :label="item.category">{{item.name}}</option>
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
          <label for="shop">公司/店铺</label>
          <input name="shop" v-model="form.shop" placeholder="请输入您所在的公司或店铺名">
        </div>

        <div class="form-item">
          <label for="duties">职务</label>
          <input name="title" v-model="form.position" placeholder="请输入您的职务">
        </div>

        <div class="form-item">
          <label for="area">所在地区</label>
          <select name="area" v-model="form.area">
            <!--<option value="" disabled selected>请选择</option>-->
            <option v-for="item in area" :value="item.area" :key="item.area" :label="item.area">{{item.name}}</option>
          </select>
        </div>

      </form>

      <div class="claim"><span class="danger">*</span>为必填项，请如实填写，便于一日猫与您联系</div>
      <button class="submit" type="button" @click="onSubmit">提交</button>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      category: [],
      area: [],
      form: {
        identity: '',
        category: '',
        username: '',
        tel: '',
        shop: '',
        position: '',
        area: ''
      },
      identity: [
        {identity: '身份证'},
        {identity: '户口簿'}
      ]
    }
  },
  methods: {
    onSubmit () {
      if (!this.form.identity) {
        alert('请选择您的身份类型！')
      } else if (!this.form.category) {
        alert('请选择要合作的类别！')
      } else if (!this.form.username) {
        alert('请输入您的姓名！')
      } else if (!this.form.tel) {
        alert('请输入您的手机号！')
      } else {
        this.$post('', this.form).then(resp => {
          if (resp.status === this.$SUCCESS) {
            alert('提交成功！')
            this.$router.back()
          }
        })
      }
    }
  }
}
</script>

<style scoped>
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
  width: 142px;
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
