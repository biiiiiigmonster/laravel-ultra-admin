<template>
    <div class="relative w-full h-full px-4">
        <div class="container relative h-full py-2 mx-auto sm:px-10">
            <div class="flex h-full">
                <div class="hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12">
                    <div class="my-auto">
                        <div class="mt-10 font-medium text-white -enter-x">
                            <span class="inline-block mt-4 text-3xl"> 开箱即用的中后台管理系统</span>
                        </div>
                        <div class="mt-5 font-normal text-white text-md dark:text-gray-500 -enter-x">
                            输入您的个人详细信息开始使用！
                        </div>
                    </div>
                </div>
                <div class="flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12">
                    <div
                        class="relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"
                    >
                        <login-form />
                        <register-form />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {LoginForm, RegisterForm} from '@/Components/AuthForm';
</script>
