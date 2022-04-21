<template>
    <a-form class="p-4 enter-x" :model="formData" ref="formRef">
        <a-form-item name="account" class="enter-x">
            <a-input
                class="fix-auto-fill"
                size="large"
                v-model:value="formData.account"
                placeholder="账号"
            />
        </a-form-item>
        <a-form-item name="mobile" class="enter-x">
            <a-input
                size="large"
                v-model:value="formData.mobile"
                placeholder="手机号"
                class="fix-auto-fill"
            />
        </a-form-item>
        <a-form-item name="password" class="enter-x">
            <a-input-password
                size="large"
                v-model:value="formData.password"
                placeholder="密码"
            />
        </a-form-item>
        <a-form-item name="confirmPassword" class="enter-x">
            <a-input-password
                size="large"
                visibilityToggle
                v-model:value="formData.confirmPassword"
                placeholder="确认密码"
            />
        </a-form-item>

        <a-form-item class="enter-x" name="policy">
            <!-- No logic, you need to deal with it yourself -->
            <a-checkbox v-model:checked="formData.policy" size="small">
                隐私协议
            </a-checkbox>
        </a-form-item>

        <a-button
            type="primary"
            class="enter-x"
            size="large"
            block
            @click="handleRegister"
            :loading="loading"
        >
            注册
        </a-button>
        <a-button size="large" block class="mt-4 enter-x" @click="handleRegister">
            回到登录
        </a-button>
    </a-form>
</template>
<script setup>
  import { reactive, ref} from 'vue';

  const formRef = ref();
  const loading = ref(false);

  const formData = reactive({
    account: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    sms: '',
    policy: false,
  });

  function handleRegister() {
    console.log(123);
  }
</script>
