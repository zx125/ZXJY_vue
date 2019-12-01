<template>

    <div class="header">
        <div class="slogan">
            <p>老男孩IT教育 | 帮助有志向的年轻人通过努力学习获得体面的工作和生活</p>
        </div>
        <div class="nav">
            <ul>
                <li class="logo">
                    <RouterLink to="/">
                        <img src="../assets/img/head-logo.svg" alt="">
                    </RouterLink>
                </li>
                <li class="ele">
                    <span @click="goPage('/free')" :class="{active:url_path === '/free'}">免费课</span>
                </li>
                <li class="ele">
                    <span @click="goPage('/course')" :class="{active:url_path === '/course'}">实战课</span>
                </li>
                <li class="ele">
                    <span @click="goPage('/light-course')" :class="{active:url_path === '/light-course'}">轻课</span>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Header",
        methods: {
            goPage(url_path) {
                if (url_path != this.url_path) {
                    this.$router.push(url_path);
                    // sessionStorage.url_path = url_path;
                }
            }
        }, data() {
            return {
                // url_path: sessionStorage.url_path || '/',
                url_path: "",
            }
        },
        created() {
            this.url_path = this.$route.path;
        }
    }
</script>

<style scoped>
    .slogan {
        background-color: #eee;
        height: 40px;
    }

    .slogan p {
        width: 1200px;
        margin: 0 auto;
        color: #aaa;
        font-size: 13px;
        line-height: 40px;
    }

    .nav {
        background-color: antiquewhite;
        user-select: none;
    }

    .nav ul {
        width: 1200px;
        margin: 0 auto;
        padding: 15px 0;
    }

    .nav ul:after {
        clear: both;
        content: '';
        display: block;
    }

    .nav ul li {
        float: left;
    }

    .logo {
        margin-right: 20px;
    }

    .ele {
        margin: 0 20px;
    }

    .ele span {
        display: block;
        font: 15px/36px '微软雅黑';
        border-bottom: 2px solid transparent;
        cursor: pointer;
    }

    .ele span:hover {
        border-bottom-color: orange;
    }

    .ele span.active {
        color: orange;
        border-bottom-color: orange;
    }

</style>