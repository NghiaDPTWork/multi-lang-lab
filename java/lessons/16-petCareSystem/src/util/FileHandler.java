/* =========================================================================
   BỘ CÔNG CỤ XỬ LÝ TẬP TIN (GENERIC FILE HANDLER)
   ========================================================================= */

package util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;

public abstract class FileHandler<T> {

    // Đọc tệp tin trả về đối tượng chung (Load)
    public boolean load(String url, ArrayList<T> list) {
        list.clear();
        File f = new File(url);
        if (!f.exists()) return false; // Không có file thì bỏ qua không báo lỗi lớn
        
        try (BufferedReader reader = new BufferedReader(new FileReader(f))) {
            String line = reader.readLine();
            while (line != null) {
                line = line.trim();
                if (!line.isEmpty()) {
                    T t = handleLine(line);
                    if (t != null) list.add(t);
                }
                line = reader.readLine();
            }
            return true;
        } catch (Exception e) {
            System.out.println(">> CANH BAO: Loi khi doc file du lieu!");
            return false;
        }
    }

    // Phương thức trừu tượng bắt buộc lớp kế thừa phải định nghĩa cách cắt chuỗi
    public abstract T handleLine(String line);

    // Ghi mảng đối tượng ra tập tin (Save)
    public boolean save(ArrayList<T> list, String url) {
        try (FileOutputStream fos = new FileOutputStream(new File(url));
             OutputStreamWriter writer = new OutputStreamWriter(fos)) {
            
            for (T item : list) {
                writer.write(item.toString());
                writer.write("\n");
            }
            writer.flush();
            return true;
        } catch (Exception e) {
            System.out.println(">> LOI: Khong the luu file! Vui long kiem tra quyen ghi.");
            return false;
        }
    }
}
