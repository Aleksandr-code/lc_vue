<template>
    <div>
        <router-link class="m-2" :to="{name: 'people.index'}">People</router-link>
        <router-link class="m-2" :to="{name: 'people.create'}">Add</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
