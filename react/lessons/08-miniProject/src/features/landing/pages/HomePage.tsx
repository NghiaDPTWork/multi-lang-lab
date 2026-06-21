import { useState, useEffect } from "react";
import { useAuthStore } from "@/features/auth";
import { useUser } from "@/features/auth/hooks";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import {
  Calendar,
  Search,
  Heart,
  Bell,
  Sparkles,
  Gift,
  Utensils,
  BookOpen,
  Plus,
  Trash2,
  CalendarDays,
  Info,
  Check,
  BellRing,
  X,
  Compass,
} from "lucide-react";
import { toast } from "sonner";

interface Holiday {
  id: string;
  name: string;
  date: string; // YYYY-MM-DD
  dateStr: string;
  category: "national" | "traditional" | "international" | "custom";
  description: string;
  customs: string[];
  foods: string[];
  gradient: string;
}

const DEFAULT_HOLIDAYS: Holiday[] = [
  {
    id: "tet-nguyen-dan",
    name: "Tết Nguyên Đán",
    date: "2026-02-17",
    dateStr: "Mùng 1/1 (Âm lịch)",
    category: "national",
    description: "Lễ hội lớn nhất và quan trọng nhất của dân tộc Việt Nam, đánh dấu sự khởi đầu của một năm mới với nhiều hy vọng và sum họp gia đình.",
    customs: ["Gói bánh chưng", "Xông đất đầu năm", "Mừng tuổi chúc Tết", "Thăm viếng họ hàng", "Tống cựu nghênh tân"],
    foods: ["Bánh chưng", "Bánh tét", "Dưa hành củ kiệu", "Thịt kho hột vịt", "Mứt Tết truyền thống"],
    gradient: "from-red-500 to-amber-500",
  },
  {
    id: "gio-to-hung-vuong",
    name: "Giỗ Tổ Hùng Vương",
    date: "2026-04-26",
    dateStr: "Mùng 10/3 (Âm lịch)",
    category: "national",
    description: "Ngày hội tụ của cả dân tộc tưởng nhớ công lao dựng nước của các vua Hùng, thể hiện truyền thống đạo lý 'Uống nước nhớ nguồn'.",
    customs: ["Hành hương Đền Hùng", "Rước kiệu lễ hội", "Dâng hương hoa tôn kính"],
    foods: ["Bánh chưng", "Bánh giầy", "Xôi gấc đỏ"],
    gradient: "from-amber-600 to-orange-500",
  },
  {
    id: "giai-phong-mien-nam",
    name: "Giải Phóng Miền Nam",
    date: "2026-04-30",
    dateStr: "30 tháng 4",
    category: "national",
    description: "Kỷ niệm sự kiện giải phóng hoàn toàn miền Nam, thống nhất đất nước, non sông thu về một mối.",
    customs: ["Treo cờ Tổ quốc", "Lễ hội âm nhạc đường phố", "Triển lãm lịch sử cách mạng"],
    foods: ["Tiệc họp mặt gia đình", "Các món đặc sản vùng miền"],
    gradient: "from-red-600 to-rose-500",
  },
  {
    id: "quoc-te-lao-dong",
    name: "Quốc Tế Lao Động",
    date: "2026-05-01",
    dateStr: "01 tháng 5",
    category: "international",
    description: "Ngày kỷ niệm cuộc đấu tranh của giai cấp công nhân toàn thế giới, là dịp để người lao động nghỉ ngơi, thư giãn.",
    customs: ["Nghỉ ngơi giải trí", "Du lịch cùng gia đình", "Hưởng ứng ngày hội lao động"],
    foods: ["Tiệc nướng BBQ", "Lẩu họp mặt bạn bè"],
    gradient: "from-blue-600 to-indigo-500",
  },
  {
    id: "quoc-khanh-vn",
    name: "Quốc Khánh Việt Nam",
    date: "2026-09-02",
    dateStr: "02 tháng 9",
    category: "national",
    description: "Ngày Chủ tịch Hồ Chí Minh đọc Bản Tuyên ngôn Độc lập tại Quảng trường Ba Đình lịch sử năm 1945, khai sinh ra nước Việt Nam.",
    customs: ["Treo cờ đỏ sao vàng", "Xem bắn pháo hoa", "Mít tinh kỷ niệm trang nghiêm"],
    foods: ["Phở Hà Nội", "Bún chả", "Nem rán truyền thống"],
    gradient: "from-rose-600 to-yellow-500",
  },
  {
    id: "le-vu-lan",
    name: "Lễ Vu Lan Báo Hiếu",
    date: "2026-08-27",
    dateStr: "Rằm tháng 7 (Âm lịch)",
    category: "traditional",
    description: "Đại lễ báo hiếu công ơn sinh thành, dưỡng dục của cha mẹ và tưởng nhớ tổ tiên trong tâm thức văn hóa Phật giáo Việt Nam.",
    customs: ["Cài hoa hồng lên ngực áo", "Ăn chay tích đức cầu an", "Đi chùa cầu nguyện", "Thả đèn hoa đăng"],
    foods: ["Cơm chay thanh tịnh", "Xôi vò hạt sen", "Chè trôi nước"],
    gradient: "from-yellow-600 to-amber-500",
  },
  {
    id: "tet-trung-thu",
    name: "Tết Trung Thu",
    date: "2026-09-25",
    dateStr: "Rằm tháng 8 (Âm lịch)",
    category: "traditional",
    description: "Tết đoàn viên, đêm hội trăng rằm đầy màu sắc dành cho trẻ em với các màn rước đèn ông sao, ngắm trăng và phá cỗ.",
    customs: ["Rước đèn ông sao", "Múa lân múa rồng sôi động", "Bày mâm ngũ quả phá cỗ", "Cắt bánh ngắm trăng"],
    foods: ["Bánh nướng đậu xanh", "Bánh dẻo thập cẩm", "Bưởi năm roi", "Trà sen ấm nóng"],
    gradient: "from-purple-600 to-amber-500",
  },
  {
    id: "tet-duong-lich",
    name: "Tết Dương Lịch",
    date: "2026-01-01",
    dateStr: "01 tháng 1",
    category: "international",
    description: "Khởi đầu một năm mới theo lịch Gregorius, đánh dấu thời khắc chuyển giao năm mới trên toàn cầu.",
    customs: ["Đếm ngược đón giao thừa", "Xem pháo hoa nghệ thuật", "Tụ họp liên hoan"],
    foods: ["Rượu vang sủi", "Bánh kem ngọt ngào", "Finger food nhẹ nhàng"],
    gradient: "from-cyan-600 to-violet-600",
  },
  {
    id: "le-giang-sinh",
    name: "Lễ Giáng Sinh (Noel)",
    date: "2026-12-25",
    dateStr: "25 tháng 12",
    category: "international",
    description: "Ngày lễ kỷ niệm ngày sinh của Chúa Giêsu, dịp để mọi người trao gửi quà tặng và những lời chúc an lành trong mùa đông lạnh.",
    customs: ["Trang trí cây thông Noel", "Tặng quà ông già Noel", "Đi thánh lễ nhà thờ", "Dùng bữa tối gia đình"],
    foods: ["Gà tây quay mật ong", "Bánh khúc cây chocolate", "Kẹo gậy hương bạc hà"],
    gradient: "from-emerald-600 to-red-600",
  },
  {
    id: "ngay-phu-nu-vn",
    name: "Ngày Phụ Nữ Việt Nam",
    date: "2026-10-20",
    dateStr: "20 tháng 10",
    category: "traditional",
    description: "Ngày tôn vinh vẻ đẹp, trí tuệ và sự cống hiến lớn lao của người phụ nữ Việt Nam trong gia đình và xã hội.",
    customs: ["Tặng hoa hồng tươi", "Tổ chức sự kiện tôn vinh", "Mua quà tri ân mẹ, vợ, chị em"],
    foods: ["Lẩu thái hải sản", "Bánh kem trái cây"],
    gradient: "from-pink-500 to-rose-500",
  }
];

export default function HomePage() {
  const token = useAuthStore((state) => state.accessToken);
  const { data: user } = useUser();

  // Holidays state merging defaults + custom from localStorage
  const [holidays, setHolidays] = useState<Holiday[]>(() => {
    const saved = localStorage.getItem("custom_holidays");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return [...DEFAULT_HOLIDAYS, ...parsed];
      } catch (e) {
        return DEFAULT_HOLIDAYS;
      }
    }
    return DEFAULT_HOLIDAYS;
  });

  // Favorites & Reminders
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem("favorite_holidays");
    return saved ? JSON.parse(saved) : [];
  });

  const [reminders, setReminders] = useState<string[]>(() => {
    const saved = localStorage.getItem("reminder_holidays");
    return saved ? JSON.parse(saved) : [];
  });

  // Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeMonth, setActiveMonth] = useState<number | null>(null);

  // Countdown States
  const [nearestHoliday, setNearestHoliday] = useState<Holiday | null>(null);
  const [countdownText, setCountdownText] = useState<string>("");

  // Detailed Modal State
  const [detailHoliday, setDetailHoliday] = useState<Holiday | null>(null);

  // Form Adding State
  const [isAdding, setIsAdding] = useState(false);
  const [newHolidayName, setNewHolidayName] = useState("");
  const [newHolidayDate, setNewHolidayDate] = useState("");
  const [newHolidayDesc, setNewHolidayDesc] = useState("");
  const [newHolidayCustoms, setNewHolidayCustoms] = useState("");
  const [newHolidayFoods, setNewHolidayFoods] = useState("");
  const [newHolidayGradient, setNewHolidayGradient] = useState("from-pink-500 to-rose-500");

  // Effect to find the nearest holiday from June 21, 2026 baseline
  useEffect(() => {
    const mockToday = new Date("2026-06-21T00:00:00");
    const todayMs = mockToday.getTime();

    // Sort by date chronologically
    const sorted = [...holidays].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    // Find the next upcoming holiday
    let next = sorted.find((h) => new Date(h.date).getTime() >= todayMs);

    // If none found for remainder of year, wrap around to first holiday of the list next year
    if (!next && sorted.length > 0) {
      next = sorted[0];
    }

    setNearestHoliday(next || null);
  }, [holidays]);

  // Dynamic live countdown effect (Mocking baseline starting June 21, 2026)
  useEffect(() => {
    if (!nearestHoliday) return;

    const timer = setInterval(() => {
      // For a real-time feel, we calculate the remaining time based on current time.
      // But we adjust the year to make sure it's upcoming relative to "now".
      const now = new Date();
      const target = new Date(nearestHoliday.date);

      // If the target date has passed in the current year, compute countdown for the next year
      if (target.getTime() < now.getTime()) {
        target.setFullYear(now.getFullYear() + 1);
      }

      const diff = target.getTime() - now.getTime();
      if (diff <= 0) {
        setCountdownText("Sự kiện đang diễn ra hôm nay!");
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setCountdownText(
          `${days} ngày, ${hours} giờ, ${minutes} phút, ${seconds} giây`
        );
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [nearestHoliday]);

  // Favorites / Reminders handlers
  const toggleFavorite = (id: string, name: string) => {
    const updated = favorites.includes(id)
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem("favorite_holidays", JSON.stringify(updated));

    if (favorites.includes(id)) {
      toast.info(`Đã bỏ yêu thích ngày lễ "${name}"`);
    } else {
      toast.success(`Đã thêm "${name}" vào danh sách yêu thích! ❤️`);
    }
  };

  const toggleReminder = (id: string, name: string) => {
    const updated = reminders.includes(id)
      ? reminders.filter((remId) => remId !== id)
      : [...reminders, id];
    setReminders(updated);
    localStorage.setItem("reminder_holidays", JSON.stringify(updated));

    if (reminders.includes(id)) {
      toast.info(`Đã hủy nhắc nhở cho ngày lễ "${name}"`);
    } else {
      toast.success(`Đã đăng ký nhận nhắc nhở cho "${name}" thành công! 🔔`);
    }
  };

  // Add Custom Holiday
  const handleAddHoliday = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHolidayName || !newHolidayDate || !newHolidayDesc) {
      toast.error("Vui lòng điền đủ Tên ngày lễ, Ngày diễn ra và Mô tả!");
      return;
    }

    const newId = `custom-${Date.now()}`;
    const dateObj = new Date(newHolidayDate);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;

    const newH: Holiday = {
      id: newId,
      name: newHolidayName,
      date: newHolidayDate,
      dateStr: `${day} tháng ${month}`,
      category: "custom",
      description: newHolidayDesc,
      customs: newHolidayCustoms
        ? newHolidayCustoms.split(",").map((c) => c.trim())
        : [],
      foods: newHolidayFoods
        ? newHolidayFoods.split(",").map((f) => f.trim())
        : [],
      gradient: newHolidayGradient,
    };

    const savedCustoms = localStorage.getItem("custom_holidays");
    const parsed = savedCustoms ? JSON.parse(savedCustoms) : [];
    const updatedCustoms = [...parsed, newH];
    localStorage.setItem("custom_holidays", JSON.stringify(updatedCustoms));

    setHolidays([...DEFAULT_HOLIDAYS, ...updatedCustoms]);
    toast.success(`Đã lưu ngày lễ cá nhân: "${newHolidayName}"! 🎉`);

    // Reset Form
    setNewHolidayName("");
    setNewHolidayDate("");
    setNewHolidayDesc("");
    setNewHolidayCustoms("");
    setNewHolidayFoods("");
    setIsAdding(false);
  };

  // Delete Custom Holiday
  const handleDeleteHoliday = (id: string, name: string) => {
    const savedCustoms = localStorage.getItem("custom_holidays");
    if (!savedCustoms) return;

    const parsed = JSON.parse(savedCustoms);
    const updatedCustoms = parsed.filter((h: Holiday) => h.id !== id);
    localStorage.setItem("custom_holidays", JSON.stringify(updatedCustoms));

    setHolidays([...DEFAULT_HOLIDAYS, ...updatedCustoms]);
    setFavorites(favorites.filter((favId) => favId !== id));
    setReminders(reminders.filter((remId) => remId !== id));

    toast.success(`Đã xóa ngày lễ "${name}"`);
  };

  // Filter Logic
  const filteredHolidays = holidays.filter((h) => {
    const matchesSearch =
      h.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      h.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "all" || h.category === activeCategory;

    const monthNum = new Date(h.date).getMonth() + 1;
    const matchesMonth = activeMonth === null || monthNum === activeMonth;

    return matchesSearch && matchesCategory && matchesMonth;
  });

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "national":
        return "Quốc Gia";
      case "traditional":
        return "Cổ Truyền";
      case "international":
        return "Quốc Tế";
      case "custom":
        return "Cá Nhân";
      default:
        return "Khác";
    }
  };

  const getCategoryBadgeColor = (cat: string) => {
    switch (cat) {
      case "national":
        return "bg-red-500/10 text-red-600 border-red-500/20";
      case "traditional":
        return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      case "international":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "custom":
        return "bg-pink-500/10 text-pink-600 border-pink-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-8 py-4">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl border bg-card p-8 md:p-12 shadow-sm">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-linear-to-br from-red-500/10 to-amber-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Văn hóa & Lễ hội Việt Nam
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            {user ? `Xin chào, ${user.fullname || "Bạn"}!` : "Khám Phá Ngày Lễ & Lễ Hội"}
          </h1>

          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Hành trình tìm hiểu các giá trị lịch sử kiêu hùng, bản sắc văn hóa truyền thống tinh hoa và các sự kiện quốc tế ý nghĩa trong năm. 
            {token ? " Bạn có thể tự do lưu lại ngày lễ yêu thích hoặc tự lập danh sách ngày kỷ niệm riêng." : " Hãy đăng nhập để cá nhân hóa danh sách ngày lễ của bạn."}
          </p>

          {/* Quick Counter Info */}
          {token && (
            <div className="flex flex-wrap gap-4 text-xs font-medium text-muted-foreground pt-2">
              <span className="flex items-center gap-1.5 bg-muted/50 border px-3 py-1.5 rounded-full">
                ❤️ {favorites.length} Ngày lễ yêu thích
              </span>
              <span className="flex items-center gap-1.5 bg-muted/50 border px-3 py-1.5 rounded-full">
                🔔 {reminders.length} Nhắc nhở đã đặt
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Countdown Card (Nearest Holiday) */}
      {nearestHoliday && (
        <Card className="border shadow-sm overflow-hidden bg-linear-to-r from-slate-900 to-slate-800 text-white relative">
          <div className={`absolute inset-0 bg-gradient-to-r ${nearestHoliday.gradient} opacity-20`} />
          <CardContent className="p-6 md:p-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1 bg-white/10 text-white text-xs px-2.5 py-1 rounded-full border border-white/20 font-medium">
                <CalendarDays className="w-3.5 h-3.5" />
                Ngày lễ sắp tới gần nhất
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                {nearestHoliday.name}
              </h2>
              <p className="text-slate-300 text-xs md:text-sm">
                Diễn ra vào: <span className="font-semibold text-white">{nearestHoliday.dateStr}</span> (Dương lịch: {new Date(nearestHoliday.date).toLocaleDateString("vi-VN")})
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/15 text-center min-w-[240px]">
              <p className="text-[10px] uppercase tracking-wider text-slate-300 font-semibold mb-1">
                Thời gian đếm ngược
              </p>
              <p className="text-lg md:text-xl font-bold tracking-tight text-amber-400 font-mono animate-pulse">
                {countdownText || "Đang tính toán..."}
              </p>
              <Button
                variant="link"
                size="sm"
                className="text-white hover:text-amber-300 text-xs font-semibold mt-2 h-auto p-0 cursor-pointer"
                onClick={() => setDetailHoliday(nearestHoliday)}
              >
                Khám phá nghi thức truyền thống →
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Filter and Control Area */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Categories Tab Selector */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "Tất cả" },
              { id: "national", label: "Lễ Quốc Gia" },
              { id: "traditional", label: "Lễ Cổ Truyền" },
              { id: "international", label: "Quốc Tế" },
              { id: "custom", label: "Ngày Cá Nhân" },
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeCategory === tab.id ? "default" : "outline"}
                onClick={() => setActiveCategory(tab.id)}
                className="text-xs rounded-full font-medium cursor-pointer"
                size="sm"
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Actions & Search */}
          <div className="flex items-center gap-2 flex-1 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Tìm ngày lễ, sự kiện..."
                className="pl-9 text-xs h-9 rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {token && (
              <Button
                size="sm"
                className="gap-1 text-xs cursor-pointer h-9 px-3 shrink-0 rounded bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setIsAdding(!isAdding)}
              >
                <Plus className="w-4 h-4" />
                Thêm lễ cá nhân
              </Button>
            )}
          </div>
        </div>

        {/* Month Selector Grid */}
        <div className="bg-card border rounded-lg p-4 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            Lọc nhanh theo tháng dương lịch:
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Button
              size="sm"
              variant={activeMonth === null ? "default" : "outline"}
              onClick={() => setActiveMonth(null)}
              className="rounded text-xs px-2.5 py-1 h-7 cursor-pointer"
            >
              Cả năm
            </Button>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => (
              <Button
                key={m}
                size="sm"
                variant={activeMonth === m ? "default" : "outline"}
                onClick={() => setActiveMonth(m)}
                className="rounded text-xs px-2.5 py-1 h-7 min-w-[50px] cursor-pointer"
              >
                Tháng {m}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Collapsible Add Custom Holiday Form */}
      {isAdding && (
        <Card className="border bg-card shadow-md rounded-lg animate-in fade-in slide-in-from-top-4 duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold">Thêm Ngày Kỷ Niệm Cá Nhân</CardTitle>
                <CardDescription className="text-xs">Tạo ngày giỗ, sinh nhật, hoặc ngày kỷ niệm đặc biệt của gia đình bạn.</CardDescription>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsAdding(false)} className="h-8 w-8 cursor-pointer">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddHoliday} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">Tên ngày kỷ niệm *</label>
                <Input
                  placeholder="Ví dụ: Kỷ niệm ngày cưới, Sinh nhật mẹ..."
                  required
                  value={newHolidayName}
                  onChange={(e) => setNewHolidayName(e.target.value)}
                  className="text-xs h-9 rounded"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">Ngày diễn ra (Dương lịch) *</label>
                <Input
                  type="date"
                  required
                  value={newHolidayDate}
                  onChange={(e) => setNewHolidayDate(e.target.value)}
                  className="text-xs h-9 rounded"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-foreground">Mô tả tóm tắt *</label>
                <Input
                  placeholder="Ý nghĩa hoặc kế hoạch chuẩn bị..."
                  required
                  value={newHolidayDesc}
                  onChange={(e) => setNewHolidayDesc(e.target.value)}
                  className="text-xs h-9 rounded"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">Hoạt động chính (cách nhau bằng dấu phẩy)</label>
                <Input
                  placeholder="Ví dụ: Ăn tối nhà hàng, Tặng quà, Đi dã ngoại..."
                  value={newHolidayCustoms}
                  onChange={(e) => setNewHolidayCustoms(e.target.value)}
                  className="text-xs h-9 rounded"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">Món ăn dự kiến (cách nhau bằng dấu phẩy)</label>
                <Input
                  placeholder="Ví dụ: Bánh kem, Bít tết, Rượu vang..."
                  value={newHolidayFoods}
                  onChange={(e) => setNewHolidayFoods(e.target.value)}
                  className="text-xs h-9 rounded"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-foreground">Chọn tông màu nền</label>
                <div className="flex gap-3 pt-1">
                  {[
                    { id: "from-pink-500 to-rose-500", label: "Hồng đào" },
                    { id: "from-purple-600 to-indigo-600", label: "Tím lam" },
                    { id: "from-emerald-500 to-teal-500", label: "Xanh ngọc" },
                    { id: "from-amber-500 to-yellow-500", label: "Vàng rơm" },
                    { id: "from-red-500 to-orange-500", label: "Đỏ lửa" },
                  ].map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => setNewHolidayGradient(preset.id)}
                      className={`flex-1 h-8 rounded border text-[10px] font-semibold text-white bg-gradient-to-r ${preset.id} cursor-pointer transition-all ${
                        newHolidayGradient === preset.id
                          ? "ring-2 ring-primary ring-offset-2 scale-105"
                          : "opacity-80 hover:opacity-100"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 pt-2 flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setIsAdding(false)}
                  className="rounded text-xs cursor-pointer"
                >
                  Hủy
                </Button>
                <Button
                  type="submit"
                  size="sm"
                  className="rounded text-xs cursor-pointer bg-primary text-primary-foreground"
                >
                  Lưu ngày lễ
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Holiday Grid list */}
      {filteredHolidays.length === 0 ? (
        <Card className="border border-dashed p-12 text-center rounded-lg bg-muted/20">
          <CardContent className="space-y-2">
            <CalendarDays className="w-12 h-12 text-muted-foreground mx-auto" />
            <h3 className="font-bold text-base text-foreground">Không tìm thấy ngày lễ nào</h3>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto">
              Không có sự kiện nào khớp với tiêu chí tìm kiếm hoặc bộ lọc hiện tại của bạn. Thử thay đổi từ khóa hoặc tháng lọc nhé!
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredHolidays.map((holiday) => {
            const isFav = favorites.includes(holiday.id);
            const isRem = reminders.includes(holiday.id);

            return (
              <Card
                key={holiday.id}
                className="overflow-hidden border bg-card hover:border-primary/20 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col group rounded-xl"
              >
                {/* Visual Header color strip */}
                <div className={`h-2 bg-gradient-to-r ${holiday.gradient}`} />

                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className={`text-[10px] font-semibold uppercase tracking-wider rounded-full px-2.5 py-0.5 border ${getCategoryBadgeColor(holiday.category)}`}>
                      {getCategoryLabel(holiday.category)}
                    </Badge>

                    {token && (
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => toggleFavorite(holiday.id, holiday.name)}
                          className={`p-1.5 rounded-full border hover:bg-muted cursor-pointer transition-colors ${
                            isFav
                              ? "bg-red-50 text-red-500 border-red-200"
                              : "text-muted-foreground border-border/80"
                          }`}
                          title="Lưu yêu thích"
                        >
                          <Heart className={`w-3.5 h-3.5 ${isFav ? "fill-current" : ""}`} />
                        </button>

                        <button
                          onClick={() => toggleReminder(holiday.id, holiday.name)}
                          className={`p-1.5 rounded-full border hover:bg-muted cursor-pointer transition-colors ${
                            isRem
                              ? "bg-amber-50 text-amber-600 border-amber-200"
                              : "text-muted-foreground border-border/80"
                          }`}
                          title="Đặt nhắc nhở"
                        >
                          {isRem ? (
                            <BellRing className="w-3.5 h-3.5 text-amber-500 animate-swing" />
                          ) : (
                            <Bell className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors pt-2">
                    {holiday.name}
                  </CardTitle>

                  <CardDescription className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
                    Diễn ra: {holiday.dateStr}
                    <span className="text-[10px] text-muted-foreground/60 font-normal">
                      ({new Date(holiday.date).toLocaleDateString("vi-VN")})
                    </span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="py-2 text-xs text-muted-foreground line-clamp-3 flex-1">
                  {holiday.description}
                </CardContent>

                <CardFooter className="pt-4 pb-4 flex justify-between gap-2 border-t bg-muted/10">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="text-xs font-semibold flex-1 cursor-pointer bg-muted hover:bg-muted/80 rounded"
                    onClick={() => setDetailHoliday(holiday)}
                  >
                    <Info className="w-3.5 h-3.5 mr-1" />
                    Khám phá chi tiết
                  </Button>

                  {holiday.category === "custom" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs font-semibold text-destructive hover:bg-destructive/10 border-destructive/20 cursor-pointer rounded shrink-0 px-2.5"
                      onClick={() => handleDeleteHoliday(holiday.id, holiday.name)}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}

      {/* Custom Dialog Modal for Holiday Details */}
      {detailHoliday && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <Card className="w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl border bg-card text-card-foreground rounded-xl relative animate-in zoom-in-95 duration-200">
            {/* Elegant Background Header Banner */}
            <div className={`h-24 md:h-32 bg-gradient-to-r ${detailHoliday.gradient} flex items-end p-6 relative`}>
              <div className="absolute inset-0 bg-black/20" />
              <button
                onClick={() => setDetailHoliday(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-black/20 hover:bg-black/45 text-white cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <Badge variant="secondary" className="relative z-10 text-white bg-white/20 backdrop-blur-md border border-white/25 text-xs font-bold px-3 py-1 uppercase rounded-full">
                {getCategoryLabel(detailHoliday.category)}
              </Badge>
            </div>

            <CardHeader className="pt-6">
              <CardTitle className="text-xl md:text-2xl font-bold text-foreground">
                {detailHoliday.name}
              </CardTitle>
              <CardDescription className="text-xs md:text-sm font-semibold text-primary flex items-center gap-1.5 mt-1">
                <Calendar className="w-4 h-4" />
                Thời gian diễn ra: {detailHoliday.dateStr} (Dương lịch: {new Date(detailHoliday.date).toLocaleDateString("vi-VN")})
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 pb-8">
              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-primary" />
                  Ý nghĩa & Lịch sử
                </h4>
                <p className="text-sm text-foreground leading-relaxed bg-muted/30 p-4 rounded-lg border border-border/40">
                  {detailHoliday.description}
                </p>
              </div>

              {/* Grid for customs and foods */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Customs */}
                <div className="space-y-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-amber-500" />
                    Nghi lễ & Hoạt động chính
                  </h4>
                  {detailHoliday.customs.length === 0 ? (
                    <p className="text-xs text-muted-foreground italic">Không có nghi lễ đặc biệt</p>
                  ) : (
                    <ul className="space-y-2">
                      {detailHoliday.customs.map((c, i) => (
                        <li key={i} className="text-xs flex items-start gap-2 bg-muted/20 px-3 py-2 rounded border border-border/30">
                          <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Foods */}
                <div className="space-y-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Utensils className="w-4 h-4 text-red-500" />
                    Ẩm thực truyền thống
                  </h4>
                  {detailHoliday.foods.length === 0 ? (
                    <p className="text-xs text-muted-foreground italic">Không có ẩm thực đặc thù</p>
                  ) : (
                    <ul className="space-y-2">
                      {detailHoliday.foods.map((f, i) => (
                        <li key={i} className="text-xs flex items-start gap-2 bg-muted/20 px-3 py-2 rounded border border-border/30">
                          <Gift className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </CardContent>

            <CardFooter className="border-t bg-muted/10 p-6 flex justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDetailHoliday(null)}
                className="text-xs rounded cursor-pointer"
              >
                Đóng
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
