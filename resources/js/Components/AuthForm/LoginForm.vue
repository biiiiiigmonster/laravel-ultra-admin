<template>
  <a-form
    class="p-4 enter-x"
    :model="formData"
    ref="formRef"
    @keypress.enter="handleLogin"
  >
    <a-form-item name="account" class="enter-x">
      <a-input
        size="large"
        v-model:value="formData.account"
        placeholder="账号"
        class="fix-auto-fill"
      />
    </a-form-item>
    <a-form-item name="password" class="enter-x">
      <a-input-password
        size="large"
        visibilityToggle
        v-model:value="formData.password"
        placeholder="密码"
      />
    </a-form-item>

    <a-row class="enter-x">
      <a-col :span="12">
        <a-form-item>
          <!-- No logic, you need to deal with it yourself -->
          <a-checkbox v-model:checked="rememberMe" size="small">
            记住我
          </a-checkbox>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :style="{ 'text-align': 'right' }">
          <!-- No logic, you need to deal with it yourself -->
          <a-button type="link" size="small">
            忘记密码
          </a-button>
        </a-form-item>
      </a-col>
    </a-row>

    <a-form-item class="enter-x">
      <a-button type="primary" size="large" block @click="handleLogin" :loading="loading">
        登录
      </a-button>
    </a-form-item>
    <a-row class="enter-x">
      <a-col :md="8" :xs="24">
        <a-button block>
          手机登录
        </a-button>
      </a-col>
      <a-col :md="8" :xs="24" class="!my-2 !md:my-0 xs:mx-0 md:mx-2">
        <a-button block>
          二维码登录
        </a-button>
      </a-col>
      <a-col :md="7" :xs="24">
        <a-button block>
          注册
        </a-button>
      </a-col>
    </a-row>

    <a-divider class="enter-x">第三方登录</a-divider>

    <div class="flex justify-evenly enter-x">
      <github-filled />
      <wechat-filled />
      <alipay-circle-filled />
      <google-circle-filled />
      <twitter-circle-filled />
    </div>
  </a-form>
</template>
<script setup>
  import { reactive, ref} from 'vue';

  import {
    GithubFilled,
    WechatFilled,
    AlipayCircleFilled,
    GoogleCircleFilled,
    TwitterCircleFilled,
  } from '@ant-design/icons-vue';

  import { onKeyStroke } from '@vueuse/core';

  const formRef = ref();
  const loading = ref(false);
  const rememberMe = ref(false);

  const formData = reactive({
    account: 'vben',
    password: '123456',
  });

  onKeyStroke('Enter', handleLogin);

  const handleLogin = function () {
      console.log(123)
  };
</script>
