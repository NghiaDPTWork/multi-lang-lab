/* 
    =================================================
    PROJECT: TAB SELECTION (QUẢN LÝ TAB)
    =================================================
    
    1. MỤC TIÊU DỰ ÁN
       - Xây dựng giao diện Tab có thể chuyển đổi nội dung linh hoạt.
       - Thực hành kỹ thuật DOM Selection (querySelectorAll).
       - Thực hành xử lý sự kiện (addEventListener) và điều chỉnh Class (classList).

    2. CÁC BƯỚC THỰC HIỆN
       - B1: Lấy danh sách các nút Tab và các khối nội dung.
       - B2: Lắng nghe sự kiện click trên từng nút.
       - B3: Khi click, xóa class 'actived' ở tất cả các nút và nội dung cũ.
       - B4: Thêm class 'actived' vào nút vừa nhấn và nội dung tương ứng (dựa trên ID/data-id).
*/

// TOPIC: Xử lý logic chuyển đổi Tab
let btnList = document.querySelectorAll(".navtab-btn");
let contentList = document.querySelectorAll(".tab-content-item");

btnList.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // 1. Duyệt danh sách các nút và xóa hết các nút actived
    btnList.forEach((_btn) => {
      _btn.classList.remove("actived");
    });

    // 2. Cài actived vào nút vừa nhấn
    event.target.classList.add("actived");

    // 3. Lấy id của nút vừa nhấn
    let id = event.target.id;

    // 4. Duyệt danh sách content và xóa actived, sau đó thêm vào content tương ứng
    contentList.forEach((content) => {
      content.classList.remove("actived");
    });

    document
      .querySelector(`.tab-content-item[data-id='${id}']`)
      .classList.add("actived");
  });
});
