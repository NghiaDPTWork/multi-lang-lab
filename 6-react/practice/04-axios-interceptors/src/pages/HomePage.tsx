import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "@/stores/auth.store";

export default function HomePage() {
  const token = useAuthStore((state) => state.accessToken);



  return (
    <div className="space-y-12 py-8">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-2xl mx-auto py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          Phiên bản 2.0 đã sẵn sàng
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Welcome to ShopApp
        </h1>
        
        <p className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto">
          Trải nghiệm hệ thống mua sắm đơn giản, an toàn và nhanh chóng. 
          Giao diện được thiết kế tối giản để tập trung vào tính năng.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="gap-2 cursor-pointer bg-primary text-primary-foreground hover:bg-primary/95 shadow-sm rounded"
          >
            Explore Products
            <ArrowRight className="w-4 h-4" />
          </Button>
          
          {token ? (
            <Link to="/profile">
              <Button size="lg" variant="outline" className="cursor-pointer rounded">
                Go to Profile
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button size="lg" variant="outline" className="cursor-pointer rounded">
                Get Started
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
