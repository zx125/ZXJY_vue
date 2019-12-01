<template>
    <div class="home">
        <Header />
        <Banner />
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Banner from '@/components/Banner'

    export default {
        name: 'home',
        components: {
            Header,
            Banner,
        },
        created() {
            this.$axios({
                url: 'http://127.0.0.1:8000/user/text/',
            }).then(response => {
                console.log(response)
            })
        }

    }
</script>
<style scoped>
    .home {
        min-width: 1200px;

    }



</style>