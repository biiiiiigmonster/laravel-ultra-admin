<template>
    <div>我是layout</div>
    <div><slot /></div>
</template>

<script>
import Fullscreen from '@/Components/Fullscreen'
import HeaderBar from '@/Components/HeaderBar'
import Language from '@/Components/Language'
import Notification from '@/Components/Notification'
import Search from '@/Components/Search'
import SideMenu from '@/Components/SideMenu'
import TagsNav from '@/Components/TagsNav'
import User from '@/Components/User'

export default {
    name: 'Layout',
    components: {
        Fullscreen,
        HeaderBar,
        Language,
        Notification,
        Search,
        SideMenu,
        TagsNav,
        User
    }
}
</script>
