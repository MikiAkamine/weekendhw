$(function () {
    //footerのTOPに戻るボタン
    $('button').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');

    })
})