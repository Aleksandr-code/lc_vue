<template>
    <div class="mt-3">
        <div>Props:</div>
        <div>Color: {{obj.color}}</div>
        <div>Number: {{obj.number ? 'more 30' : 'less 30'}}</div>
        <div>isPublished: {{obj.isPublished ? 'piblish' : 'not published'}}</div>
    </div>
</template>

<script>
export default {
    name: "SomeComponent",

    props : [
        'obj'
    ],

}

</script>

<style scoped>

</style>
