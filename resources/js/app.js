require('./bootstrap');

import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/inertia-vue3';
import {InertiaProgress} from '@inertiajs/progress';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Layout from '@/Components/Layout';

createInertiaApp({
    resolve: name => {
        const page = require(`@/Pages/${name}`).default
        if (page.layout === undefined) {
            page.layout = Layout
        }
        return page
    },
    setup({el, app, props, plugin}) {
        return createApp({render: () => h(app, props)})
            .use(plugin).use(Antd)
            .mixin({methods: {route}})
            .mount(el);
    },
});

InertiaProgress.init({color: '#4B5563'});
