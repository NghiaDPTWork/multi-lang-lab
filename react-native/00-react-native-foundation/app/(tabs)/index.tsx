import React from "react";
// Cần dùng gì thì phải import từ 'react-native'
import { StyleSheet, View, Image } from "react-native";

export default function ProfileScreen() {
  return (
    // Thẻ <View> giống như <div>. Dùng để bọc các component khác.
    // Ở đây ta gán style 'container' cho View này.
    <View style={styles.container}>
      {/* 
        Thẻ <Image> dùng để hiện ảnh.
        - Phải dùng thuộc tính source.
        - Nếu ảnh từ mạng, dùng cú pháp: {{ uri: 'link' }}
        - QUAN TRỌNG: Ảnh từ mạng BẮT BUỘC phải có width và height trong style thì mới hiện lên!
      */}
      <Image
        // Để dùng ảnh có sẵn trong máy, ta dùng hàm require()
        // thay vì dùng { uri: '...' } như ảnh mạng.
        source={require("../../assets/images/icon.jpg")}
        style={styles.avatar}
      />
    </View>
  );
}

// Tạo StyleSheet để viết CSS
const styles = StyleSheet.create({
  // Style cho thẻ View bọc ngoài cùng
  container: {
    flex: 1,
    backgroundColor: "#E6F7FF",
    justifyContent: "center",
    alignItems: "center",
  },

  // Style cho thẻ Image (avatar)
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#0050B3",
  },
});
