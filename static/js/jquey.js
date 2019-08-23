$('.class:first')
$('.class:last')
$('.class:event')
$('.class:odd')
/*
* <div class="big small">
* chọn class vừa có class big và small
*/
$('.big.small')
/*
* <div class="big small">
* lọc class vừa có class big và small
*/
$('.big').filter('.small')
/*
*<div class="big">
    <div class="small"></div>
    <div class="small"></div>
</div>
* Tìm class small trong class big
*/
$('.big').filter('.small')
/*
* Attribute
<div class="demo"title="div1" style="background-color:yellow"></div>
<div class="demo"title="div2" ></div>
<div class="demo"title="div3" ></div>
<div class="demo" data-id="1"></div>
*/
$('div[title]')
$('[title]')
$('[title="div1"]')
$('[title="div1"][style="background-color:yellow"]')
$('[title="div1"][style="background-color:yellow"],[title="div3"]')
$('.demo').data('id') // return gia tri cua data-id -> 1
/*
* Toán tử 
*/
$('div[title!="div1"') //chọn những thẻ div có title != div1
$('div[title$="2"') //chọn những thẻ div có tilte kêt thúc bằng 2
$('div[title^="2"') //chọn những thẻ div có tilte bắt đầu  bằng 2
$('div[title*="2"') //chọn những thẻ div có tilte chứa "2"
/*
* get set Attribyute Element
*/
$('Selecter').html()
$('Selecter').text()
$('Selecter').val();
$('Selecter').css('color','red')
$('Selecter').attr('style','color:red');
->attr trả về giá trị thuộc tính
->prop nhiều trường hợp trả về  true/false
checked="checked"
prop('checked',false)
removeAttr('checked','checked')
/*
* checkbox radio
*/
$('input[type="radio"]:checked')
$('input[type="checkbox"]:checked').each(function(){
    $('.id').html.append($(this).val() + "<br>");
})



