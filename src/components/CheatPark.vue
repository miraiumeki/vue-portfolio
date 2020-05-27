<template>
    <div class="blogTop">
        <h1 class="articleTitle">blog</h1>
        <p class="articleSubTitle">ブログ</p>
        <ul class="blog">
            <li>
                <p>
                    <img src="@/assets/pixta_48617354_M.jpg" class="blogImg" alt="ブログ（左）の画像">
                </p>
                <div>
                    <p>2020.4.20</p>
                    <p>しばし、お暇いただきます。</p>
                </div>
            </li>            
            <li>
                <p>
                    <img src="@/assets/abecd10a8f69bd3a26055da91cf7b1df_t.jpeg" class="blogImg" alt="ブログ（中央）の画像">
                </p>
                <div>
                    <p>2020.4.16</p>
                    <p>WordPressのbloginfo()は非推奨テンプレートタグ？代わりの表示方法は？</p>
                </div>
            </li>
            <li>
                <p>
                    <img src="@/assets/pixta_57238114_M.jpg" class="blogImg" alt="ブログ（右）の画像">
                </p>
                <div>
                    <p>2020.4.9</p>
                    <p>Spark ARってなんなの？！</p>
                </div>
            </li>
        </ul>
        <a class="linkBtn" v-bind:href="url">ブログを見る</a>
    </div>
</template>
<script>
export default {
    data() {
        return {
            url: 'https://google.com'
        }
    }
}
</script>

<style scoped type = text/css>
    @import "../css/style.css";

    .linkBtn {
        display: inline-block;
        margin: 5% auto;
        padding: 15px 110px;
        background-color: #006172;
        border: 1px solid #fff;
        color: #fff;
        text-decoration: none;
        border-radius: 5rem;;
    }
    .linkBtn:hover {
        background-color: #fff;
        color: #006172;
        border: 1px solid #006172;
    }
    .blogTop {
        margin-top: 120%;
    }
    li {
        width: 30%;
        margin: 15px auto;
        cursor: pointer;
    }
    .blogImg {
        width: 100%;
        height: 160px;
    }
    .blogTop li div p:first-child {
        font-weight: bold;
    }
    .blogTop li div:hover {
        color: #006172;
    }
</style>