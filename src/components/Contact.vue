<template>
    <section>
        <v-container fluid class="amber">
            <v-row>
                <v-col class="home-contact__content-text text-center">
                    <div class="fontColorWhite">
                        <h1 class="articleTitle-w">Contact</h1>
                        <p class="articleSubTitle-w">お問合せ</p>
                        <p class="contact-text mx-auto">
                            弊社Webサイトをご利用いただき、ありがとうございます。<br>弊社への制作依頼やご相談等については、こちらのフォームよりお問い合わせください。<br>お問い合わせ内容の確認後、2,3営業日内に担当者より連絡させていただきます。<br>各項目を入力していただき、入力が終わりましたら「送信」ボタンを押してください。
                        </p>
                    </div>
                    <v-form action="#" method="post">
                        <div>
                            <label for="name">お名前<span>(必須)</span></label>
                            <input name="myinput" type="text" id="name">
                        </div>
                        <div>
                            <label for="email">メールアドレス<span>(必須)</span></label>
                                <input name="email" type="text" id="email">
                        </div>
                        <div>
                            <label for="radio">お問合せ区分<span>(必須)</span></label>
                            <div class="radio-btn">
                                    <p>
                                        <input type="radio" name="content" id="content1">
                                        <label for="content1">システム開発のご依頼・ご相談</label>
                                    </p>
                                    <p>
                                        <input type="radio" name="content" id="content2">
                                        <label for="content2">Web制作のご依頼・ご相談</label>
                                    </p>
                                    <p>
                                        <input type="radio" name="content" id="content3">
                                        <label for="content3">VRコンテンツ制作のご依頼・ご相談</label>
                                    </p>
                                    <p>
                                        <input type="radio" name="content" id="content4">
                                        <label for="content4">その他</label>
                                    </p>
                            </div>
                        </div>
                        <div>
                            <label for="comment">お問合せ内容<span>(必須)</span></label>
                            <textarea name="comment" id="comment"></textarea>
                        </div>
                        <div>
                            <v-btn color="#40C4FF" dark large>送信する</v-btn>
                        </div>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>
</script>
<style lang="scss" scoped>
.home-contact__content-text {
    padding-bottom: 100px;
    width: 80%;
    margin: 0 auto;

    .contact-text {
    line-height: 2;
    width: 80%;
}
form {
    width: 60%;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    text-align: center;
    border: 10px solid #80808014;
    box-shadow: 0 0 10px;
    border-radius: 10px;
}
form div {
    padding: 20px 0;
    text-align: center;
}
form div:not(:last-child) {
    border-bottom: 1px solid #70707017;
}
form label {
    display: inline-block;
    width: 35%;
    margin-right: 1%;
    text-align: left;
}
form label span {
    color: #F00;
}
input[type=text],
textarea,
.radio-btn {
    display: inline-block;
    width: 60%;
}
/* 区分と内容の項目名の高さを調整 */
form div:nth-child(n + 3):not(:nth-child(n + 5)) label{
    vertical-align: top;
}
input[type=text],
textarea {
    height: 30px;
    border-radius: 5px;
    border: 1px solid #707070;
}
textarea {
    height: 200px;
    resize: none;
}
.radio-btn {
    text-align: left;
    padding: 0;
}
.radio-btn p {
    margin-top: 0;
}
.radio-btn label {
    width: 90%;
}
}
</style>