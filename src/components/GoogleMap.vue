<template>
    <div>
        <div v-for="loc in locations">
            {{ loc.node.name }}<br />
            {{ loc.node.capital }}<br />
            {{ loc.node.latitude }}<br />
            {{ loc.node.longitude }}<br />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        locations: Array,
        required: true
    }
}
</script>
