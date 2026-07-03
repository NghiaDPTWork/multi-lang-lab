import { Link } from "react-router-dom";

export default function RitualDetailPage() {
  return (
    <div style={{ padding: "20px" }}>
      <Link to="/rituals">← Quay lại danh sách</Link>
      <h1 style={{ marginTop: "20px" }}>Chi Tiết Nghi Lễ</h1>
      <p>Trang chi tiết nghi lễ (chưa tích hợp logic gọi API).</p>
    </div>
  );
}
