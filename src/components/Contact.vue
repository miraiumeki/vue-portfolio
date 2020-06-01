<template>
    <div class="contact">
        <h1 class="articleTitle-w">Contact</h1>
        <p class="articleSubTitle-w">お問合せ</p>
        <p class="fontColorWhite contact-text">
            弊社Webサイトをご利用いただき、ありがとうございます。<br>弊社への制作依頼やご相談等については、こちらのフォームよりお問い合わせください。<br>お問い合わせ内容の確認後、2,3営業日内に担当者より連絡させていただきます。<br>各項目を入力していただき、入力が終わりましたら「送信」ボタンを押してください。
        </p>
        <form action="#" method="post">
            <div>
                <label for="name">お名前<span>(必須)</span></label>
                <input type="text" id="name">
            </div>
            <div>
                <label for="email">メールアドレス<span>(必須)</span></label>
                <input type="text" id="email">
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
                <input class="submit-btn" type="submit" value="送信する">
            </div>
        </form>
    </div>
</template>

<style scoped>
.contact {
    padding-bottom: 100px;
    width: 80%;
    margin: 0 auto;
}
.contact-text {
    line-height: 2;
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
input[type=text] {
    height: 30px;
    border-radius: 5px;
    border: 1px solid #707070;
}
textarea {
    height: 200px;
    border-radius: 5px;
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
.submit-btn {
    background-color: #01abcc;
    color: #fff;
    border: #01abcc;
    cursor: pointer;
    padding: 10px 30px;
}
</style>