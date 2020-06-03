<template>
  <section class="home-blog">
    <v-container fluid class="home-blog__content">
      <v-row>
        <v-col class="home-blog__content-text">
            <h1 class="articleTitle">blog</h1>
            <p class="articleSubTitle">ブログ</p>
            <ul class="blog">
                <li>
                    <a href="#">
                        <div>
                            <img src="@/assets/pixta_48617354_M.jpg" class="blogImg" alt="ブログ（左）の画像">
                        </div>
                        <div>
                            <p>2020.4.20</p>
                            <p>しばし、お暇いただきます。</p>
                        </div>
                    </a>
                </li>            
                <li>
                    <a href="#">
                        <div>
                            <img src="@/assets/abecd10a8f69bd3a26055da91cf7b1df_t.jpeg" class="blogImg" alt="ブログ（中央）の画像">
                        </div>
                        <div>
                            <p>2020.4.16</p>
                            <p>WordPressのbloginfo()は非推奨テンプレートタグ？代わりの表示方法は？</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <img src="@/assets/pixta_57238114_M.jpg" class="blogImg" alt="ブログ（右）の画像">
                        </div>
                        <div>
                            <p>2020.4.9</p>
                            <p>Spark ARってなんなの？！</p>
                        </div>
                    </a>
                </li>
            </ul>
            <v-chip x-large color="secondary" class="btn d-block mx-auto text-center">
                ブログを見る
            </v-chip>
        </v-col>
      </v-row>
    </v-container>
  </section>

</template>

<script>
export default {
    data() {
        return {
            url: "#"
        }
    }
}
</script>

<style lang="scss" scoped>

    .home-blog__content-text {
        margin-top: 1.2%;

        ul {
            padding: 0;
            display: flex;
            width: 80%;
            margin: auto;
        }
        li {
            width: 40%;
            margin: 10px;
        }
        li div p:first-child {
            font-weight: bold;
        }
        li div {
            color: #333;
        }
        li div:hover {
            color: #006172;
        }
        .blogImg {
            width: 100%;
            height: 160px;
        }
    }
</style>