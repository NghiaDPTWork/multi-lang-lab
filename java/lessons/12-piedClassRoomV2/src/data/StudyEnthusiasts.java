/* =========================================================================
   GIAO DIỆN HỘI NHỮNG NGƯỜI HAM HỌC (INTERFACE STUDYENTHUSIASTS)
   =========================================================================
   
   TRIẾT LÝ THIẾT KẾ CỦA INTERFACE:
   1. Phá vỡ rào cản huyết thống: Interface không quan tâm đến thuộc tính sinh học (Properties),
      chỉ tập trung gom nhóm các đối tượng DỰA TRÊN HÀNH VI (Methods).
   2. Mối quan hệ 'Cùng câu lạc bộ': Khác với Extends (Cha-Con), Implements giống như một 
      "Chiếc thẻ thành viên". Bất kỳ ai sở hữu nó đều được gom vào một mảng chung.
   3. Giao kèo (Contract): Vào hội thì PHẢI THỰC HIỆN ĐÚNG các to-do list đã cam kết.
   ========================================================================= */

package data;

public interface StudyEnthusiasts {
    
    // Trong Interface, mọi thuộc tính mặc định đều là public static final (Hằng số)
    String COMMON_MOTIVATION = "Never Stop Learning"; 

    // --- DANH SÁCH CÁC PHƯƠNG THỨC TRỪU TƯỢNG (TO-DO LIST) ---
    
    // Hợp đồng 1: Phải có giải thuật học tập nỗ lực (studyHard)
    public double studyHard();  

    // Hợp đồng 2: Phải có cơ chế hiển thị kết quả nỗ lực (showHard)
    public void showHard();     
}
