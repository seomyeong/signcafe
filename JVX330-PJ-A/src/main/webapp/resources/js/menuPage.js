//카테고리 선택
$('.menuWrap>article:eq(1)').css({ zIndex: 1 })


$('#titleMenu p').on('click', function (e) {
    let num = $(this).index() - 1
    $(this).parent().siblings('article').hide()
    $(this).parent().siblings('article:eq(' + num + ')').show()
    e.preventDefault()
})




//개별 메뉴 ordered에 append
$(document).ready(function () {
 
	let idNum = $('#totalNum').val();
	console.log(idNum);
    let eachCartNum = null;
    let basicSum = new Array();
    let index = 0;
    $('.menuImg').on('click', function () {
        idNum++;
        eachCartNum = "eachCart" + idNum;
        let nameNameNum = "name" + idNum;
        let tempNameNum = "temp" + idNum;
        let sizeNameNum = "size" + idNum;
        let countNameNum = "num" + idNum;
        let priceNameNum = "price" + idNum;

		let eachSmallNum = "small" + idNum;
        let eachMidiumNum = "midium" + idNum;
        let eachLargeNum = "large" + idNum;

        let eachHotNum = "hot" + idNum;
        let eachColdNum = "cold" + idNum;


        let html =
            "<div id=" + eachCartNum + " class='commonCart'>" +
            "<input type='text' name=" + nameNameNum + " class='cartName' value=''>" +

            "<div id='tempWrap'>" +
            "<label for=" + eachHotNum + "><input type='radio' id=" + eachHotNum + " class='temp' name=" + tempNameNum + " value='0' checked>HOT</label>" +
            "<label for=" + eachColdNum + "><input type='radio' id=" + eachColdNum + " class='temp' name=" + tempNameNum + " value='500'>COLD</label>" +
            "</div>" +
            "<div id='sizeWrap'>" +
            "<label for=" + eachSmallNum + "><input type='radio' class='size' id=" + eachSmallNum + " name=" + sizeNameNum + " value='0' checked>S</label>" +
            "<label for=" + eachMidiumNum + "><input type='radio' class='size' id=" + eachMidiumNum + " name=" + sizeNameNum + " value='500'>M</label>" +
            "<label for=" + eachLargeNum + "><input type='radio' class='size' id=" + eachLargeNum + " name=" + sizeNameNum + " value='1000'>L</label>" +
            "</div>" +
            "<div id='numWrap'>" +
            "<input type='text' class='num' name=" + countNameNum + " value='1' readonly>" +
            "</div>" +
            "<input type='text' name=" + priceNameNum + " class='price' readonly>" +
            "<a href='#' class='remove'>  X </a>" +
            "</div>";

 		let htmlFood=
            "<div id=" + eachCartNum + " class='commonCart'>" +
            "<input type='text' name=" + nameNameNum + " class='cartName' value=''>" +
            "<div id='numWrap'>" +
            "<input type='text' class='num' name=" + countNameNum + " value='1' readonly>" +
            "</div>" +
            "<input type='text' name=" + priceNameNum + " class='price' readonly>" +
            "<a href='#' class='remove'>  X </a>" +
            "</div>";


        	$('#totalNum').val(idNum);


        if ($(this).next().text() == "클래식 아메리카노") {
            $('#container').append(html);
            $('#' + eachCartNum).find('.cartName').val("클래식 아메리카노");
            $('#' + eachCartNum).find('.price').val(Number("6000"));
			
            basicSum[idNum - 1] = 6000;
            //conValue1[idNum - 1] = 1500;
        }
        else if ($(this).next().text() == "바닐라빈 라떼") {
            $('#container').append(html);
            $('#' + eachCartNum).find('.cartName').val("바닐라빈 라떼");
            $('#' + eachCartNum).find('.price').val(Number("7800"));


            basicSum[idNum - 1] = 7800;
            //conValue1[idNum - 1] = 2500;
        } else if ($(this).next().text() == "벨벳 다크 모카 카푸치노") {
            $('#container').append(html);
            $('#' + eachCartNum).find('.cartName').val("벨벳 다크 모카 카푸치노");
            $('#' + eachCartNum).find('.price').val(Number("7500"));


            basicSum[idNum - 1] = 7500;
            //conValue1[idNum - 1] = 3500;
        } else if ($(this).next().text() == "콜드 브루 플로트") {
            $('#container').append(html);
            $('#' + eachCartNum).find('.cartName').val("콜드 브루 플로트");
            $('#' + eachCartNum).find('.price').val(Number("7500"));


            basicSum[idNum - 1] = 7500;
            //conValue1[idNum - 1] = 3500;
        } else if ($(this).next().text() == "플랫 화이트") {
            $('#container').append(html);
            $('#' + eachCartNum).find('.cartName').val("플랫 화이트");
            $('#' + eachCartNum).find('.price').val(Number("7000"));


            basicSum[idNum - 1] = 7000;
            //conValue1[idNum - 1] = 3500;
        } else if ($(this).next().text() == "제주 유기농 녹차") {
            $('#container').append(html);
            $('#' + eachCartNum).find('.cartName').val("제주 유기농 녹차");
            $('#' + eachCartNum).find('.price').val(Number("7500"));


            basicSum[idNum - 1] = 7500;
            //conValue1[idNum - 1] = 3500;
        } else if ($(this).next().text() == "콩고물 블랙 밀크 티") {
            $('#container').append(html);
            $('#' + eachCartNum).find('.cartName').val("콩고물 블랙 밀크 티");
            $('#' + eachCartNum).find('.price').val(Number("7000"));


            basicSum[idNum - 1] = 7000;
            //conValue1[idNum - 1] = 3500;
        } else if ($(this).next().text() == "피치레몬 블렌디드") {
            $('#container').append(html);
            $('#' + eachCartNum).find('.cartName').val("피치레몬 블렌디드");
            $('#' + eachCartNum).find('.price').val(Number("8000"));


            basicSum[idNum - 1] = 8000;
            //conValue1[idNum - 1] = 3500;
        } else if ($(this).next().text() == "우유 품은 초콜릿 크루아상") {
            $('#container').append(htmlFood);
            $('#' + eachCartNum).find('.cartName').val("우유 품은 초콜릿 크루아상");
            $('#' + eachCartNum).find('.price').val(Number("6000"));


            basicSum[idNum - 1] = 6000;
            //conValue1[idNum - 1] = 3500;
        } else if ($(this).next().text() == "한 입에 쏙 치즈 꿀 볼") {
            $('#container').append(htmlFood);
            $('#' + eachCartNum).find('.cartName').val("한 입에 쏙 치즈 꿀 볼");
            $('#' + eachCartNum).find('.price').val(Number("5500"));


            basicSum[idNum - 1] = 5500;
            //conValue1[idNum - 1] = 3500;
        } else if ($(this).next().text() == "트리플 치즈 크로크무슈") {
            $('#container').append(htmlFood);
            $('#' + eachCartNum).find('.cartName').val("트리플 치즈 크로크무슈");
            $('#' + eachCartNum).find('.price').val(Number("6500"));


            basicSum[idNum - 1] = 6500;
            //conValue1[idNum - 1] = 3500;
        }
    })


	let checkStateOnce  = null;

    let tempState = 0;
    $(document).on("click", ".temp", function() {
        let tempValue = Number($(this).val());
        index = Number($(this).attr('name').slice(4, 5)) - 1;
		
        if (tempValue == 0) {
            if(checkStateOnce == "h"){return false;}
            if (tempState == 1) {
                basicSum[index] -= 500;
                tempState = 0;
            }
            else { basicSum[index] += tempValue; }

            $('#eachCart' + (index + 1)).find('.price').val(basicSum[index]);
            checkStateOnce = "h";
        }


        if (tempValue == 500) {
            if(checkStateOnce == "c"){return false;}
            basicSum[index] += tempValue;
            $('#eachCart' + (index + 1)).find('.price').val(basicSum[index]);
			
            tempState = 1;
            checkStateOnce = "c";
        }
    });


    let sizeState = 0;
    let sizeState2 = 0;
    let sizeState3 = 0;
    
    $(document).on("click", ".size", function (event) {
        let sum = 0;
        let sizeValue = Number($(this).val());
        index = Number($(this).attr('name').slice(4, 5)) - 1;

        ////////////////////////////////////////

        if (sizeValue == 0) {
            if(checkStateOnce == "s"){return false;}
            if (sizeState2 == 1) {
                basicSum[index] -= 500;
                sizeState2 = 0;
                sizeState3 = 0;
                $('#eachCart' + (index + 1)).find('.price').val(basicSum[index]);
            }
            if (sizeState == 1) {
                basicSum[index] -= 1000;
                sizeState = 0;
                sizeState3 = 0;
                $('#eachCart' + (index + 1)).find('.price').val(basicSum[index]);
            }
            else { 
                basicSum[index] += sizeValue;
                sizeState3 = 0;
                $('#eachCart' + (index + 1)).find('.price').val(basicSum[index]);
            }
            checkStateOnce = "s";
        }

        /////////////////////////////////////

        if (sizeValue == 500) {
            if(checkStateOnce == "m"){return false;}
            if (sizeState == 1) {
                basicSum[index] -= 500;
                sizeState = 0;
                sizeState2 = 1;
                sizeState3 = 1;
            }
            else { 
                basicSum[index] += sizeValue; 
                sizeState3 = 1;
                sizeState2 = 1;
            }
            $('#eachCart' + (index + 1)).find('.price').val(basicSum[index]);
            checkStateOnce = "m";
        }

        //////////////////////////////////

        if (sizeValue == 1000) {
            if(checkStateOnce == "l"){return false;}
            if(sizeState3 == 1){
                basicSum[index] += 500;
                sizeState3 = 0;
                
            }
            else{
                basicSum[index] += sizeValue;
              
            }
            $('#eachCart' + (index + 1)).find('.price').val(basicSum[index]);

            sizeState = 1;
            sizeState2 = 0;
            checkStateOnce = "l";
        }
    });


    let countNum = 1;
    $(document).on("click", ".upper", function (event) {
        countNum++;
        $(this).parent().parent().find('#num').val(countNum);
        let countPrice = basicSum[index] * countNum;
        basicSum[index] = countPrice;
        $(this).parents('#numWrap').next('#price').val(countPrice);


    })


    $(document).on("click", ".lower", function (event) {
        countNum--;
        $(this).parent().parent().find('#num').val(countNum);
        let countPrice = basicSum[index] / (countNum + 1);
        basicSum[index] = countPrice;
        $(this).parents('#numWrap').next('#price').val(countPrice);

    })


    let removeClassNum = 0;
    let i = 0;
    $(document).on("click", ".remove", function (event) {
        let cart = $(this).parents('.commonCart');
        cart.remove();

        removeClassNum = Number(cart.attr('id').slice(8, 9));

        for (i = removeClassNum + 1; i < (idNum - removeClassNum) + (removeClassNum + 1); i++) {
            $('#eachCart' + i).attr({ 'id': 'eachCart' + (i - 1) }); //카트리스트 아이디변경
            $('#eachCart' + (i - 1) + ' .cartName').attr({ 'name': 'name' + (i - 1) });
            $('#eachCart' + (i - 1) + ' .temp').attr({ 'name': 'temp' + (i - 1) });
            $('#eachCart' + (i - 1) + ' .size').attr({ 'name': 'size' + (i - 1) });
            $('#eachCart' + (i - 1) + ' .num').attr({ 'name': 'num' + (i - 1) });
            $('#eachCart' + (i - 1) + ' .price').attr({ 'name': 'price' + (i - 1) });

        }
        idNum--;
        $('#totalNum').val(idNum);
    })
})





//menuPage.jsp에서 메뉴를 선택하지 않고 결제창 눌렀을 때 (totalNum이 0일 경우) error띄우기
if( $('#totalNum')==null ){
	
}
