<template>
    <div class="newsTop">
        <h1 class="articleTitle">NEWS</h1>
        <p class="articleSubTitle">最新のお知らせ</p>
        <ul>
            <li>
                <p>2020.04.20</p>
                <p>【GWのお休みについて】<br>CHEATでは、カレンダー通り、04/29（水）、5/2（土）～5/6（水）迄をお休みさせて頂きます。<br>期間中は大変ご不便おかけいたしますが、何卒ご了承くださいますよう宜しくお願い申し上げます。</p>
            </li>
            <li>
                <p>2020.04.02</p>
                <p>新型コロナウイルス感染症の拡大防止における社内取り組みについて、こちらに記載させて頂きました。</p>
            </li>
            <li>
                <p>2020.03.09</p>
                <p>期間限定で、ホームページ制作料20%オフのキャンペーンを実施しております。<br>詳しくは<a href="#">こちら</a>からご確認頂けます。<br>ホームページの制作、リニューアルを考えている方は、この機会にぜひご利用ください！</p>
            </li>
            <li>
                <p>2020.03.09</p>
                <p><a href="#">実績一覧ページ</a>をアップ致しました。CHEATの実績の一部を公開しております。</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    }
}
</script>
<style scoped>
@import "../css/style.css";
.newsTop {
    margin: 0 115px 200px;
}
li {
    text-align: left;
    line-height: 255%;
}
.newsTop li p:first-child {
    font-weight: bold;
}
a {
    color: #00d1b2;
    text-decoration: none;
}
</style>