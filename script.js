$(document).ready(function () {

    // 1. 카드 hover 효과
   $(document).ready(function () {

    $(".card").hover(
        function () {
            $(this).css("background", "#eef4ff");
        },
        function () {
            $(this).css("background", "white");
        }
    );



    // 2. 카테고리 클릭하면 선택 표시
    $(".category").click(function () {

    $(".category").removeClass("active_category");
    $(this).addClass("active_category");

    let categoryName = $(this).find("p").text();

    $("#input_area select option").each(function () {
        if ($(this).text().includes(categoryName)) {
            $(this).prop("selected", true);
        }
    });

    $("#input_area").slideDown();

    $("#money").focus();

});

});

    // 3. 입력창 처음에는 숨기기
    $("#input_area").hide();

    // 4. 카테고리 제목 클릭하면 입력창 열고 닫기
    $(".category_box h2").click(function () {
        $("#input_area").slideToggle();
    });

    // 5. 추가하기 버튼 클릭
    $("#add_btn").click(function () {

    let money = $("#money").val();
    let content = $("#content").val();
    let memo = $("#memo").val();

    if (money == "") {
        alert("금액을 입력하세요.");
        return;
    }

    let today = new Date();

    let date =
        today.getFullYear() + "." +
        String(today.getMonth() + 1).padStart(2, "0") + "." +
        String(today.getDate()).padStart(2, "0");

    let newRow = $(`
    <tr>
        <td>${date}</td>
        <td>${$("#input_area select").val()}</td>
        <td>${content}</td>
        <td class="minus">-${Number(money).toLocaleString()}원</td>
        <td>${memo}</td>
        <td>•••</td>
    </tr>
    `);

    $("table").append(newRow);

    // 새 행 강조
    newRow.css("background", "#fff3cd");

    setTimeout(function () {
        newRow.css("background", "white");
    }, 1500);

    // 이번 달 지출 증가
    let currentExpense = parseInt(
        $("#expense_total").text().replace(/[^0-9]/g, "")
    );

    currentExpense += Number(money);

    $("#expense_total").text(
        currentExpense.toLocaleString() + "원"
    );

    // 입력창 초기화
    $("#money").val("");
    $("#content").val("");
    $("#memo").val("");

    alert("추가되었습니다.");

});

    // 6. 연도 바꾸면 그래프 막대 높이 랜덤 변경
    $(".year_select").change(function () {
    $(".bar").each(function () {
        let randomHeight = Math.floor(Math.random() * 90) + 40;

       $(this).stop().animate({
    height: randomHeight + "px"
}, 500);
    });

    alert($(this).val() + " 그래프로 변경되었습니다.");
});

});