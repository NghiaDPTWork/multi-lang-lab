import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, ShoppingBag, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="space-y-12 py-8">
      <div className="text-center space-y-6 max-w-2xl mx-auto py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          New Release: Version 2.0
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-linear-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
          Welcome to ShopApp
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md mx-auto">
          Trải nghiệm mua sắm thông minh, an toàn và cực kỳ nhanh chóng. Tối ưu hóa cho tất cả các thiết bị.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button size="lg" className="gap-2 cursor-pointer shadow-md shadow-primary/20">
            Explore Products
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Link to="/login">
            <Button size="lg" variant="outline" className="cursor-pointer">
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-all duration-300 group hover:-translate-y-1 border">
          <CardHeader>
            <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit group-hover:bg-primary/20 transition-colors">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <CardTitle className="pt-4 text-lg font-bold">Mua Sắm Đa Dạng</CardTitle>
            <CardDescription className="text-sm">
              Hàng ngàn sản phẩm chất lượng cao từ các nhà cung cấp uy tín hàng đầu.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-md transition-all duration-300 group hover:-translate-y-1 border">
          <CardHeader>
            <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit group-hover:bg-primary/20 transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <CardTitle className="pt-4 text-lg font-bold">Thanh Toán An Toàn</CardTitle>
            <CardDescription className="text-sm">
              Bảo mật tuyệt đối thông tin thanh toán của bạn với các tiêu chuẩn quốc tế.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-md transition-all duration-300 group hover:-translate-y-1 border">
          <CardHeader>
            <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit group-hover:bg-primary/20 transition-colors">
              <Zap className="w-6 h-6" />
            </div>
            <CardTitle className="pt-4 text-lg font-bold">Giao Hàng Siêu Tốc</CardTitle>
            <CardDescription className="text-sm">
              Nhận hàng trong vòng 2 giờ tại các khu vực nội thành thành phố lớn.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

