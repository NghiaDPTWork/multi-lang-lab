import { useAuthStore } from "@/features/auth";
import { useLogoutMutation } from "@/features/auth/hooks";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Link, Outlet, useLocation } from "react-router-dom";
import { navigationMenuTriggerStyle } from "../components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../components/ui/mode-toggle";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import { Button } from "../components/ui/button";

export default function MainLayout() {
  const token = useAuthStore((state) => state.accessToken);
  const location = useLocation();
  const logoutMutation = useLogoutMutation();

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex h-16 items-center justify-between px-4">
          <Link
            to="/"
            className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            ShopApp
          </Link>

          <div className="flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "cursor-pointer text-muted-foreground transition-all hover:text-foreground",
                        location.pathname === "/" &&
                          "bg-muted text-primary font-semibold rounded",
                      )}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {token && (
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/profile"
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "cursor-pointer text-muted-foreground transition-all hover:text-foreground",
                          location.pathname === "/profile" &&
                            "bg-muted text-primary font-semibold rounded",
                        )}
                      >
                        Profile
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )}
              </NavigationMenuList>
            </NavigationMenu>

            <ModeToggle />

            {token ? (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:bg-destructive/10 hover:text-destructive cursor-pointer"
                  >
                    Logout
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-card border shadow-lg max-w-sm rounded-lg p-6">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-lg font-bold text-foreground">
                      Bạn muốn đăng xuất?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-sm text-muted-foreground mt-1">
                      Phiên đăng nhập sẽ kết thúc và bạn cần đăng nhập lại để
                      truy cập hồ sơ.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="mt-4 gap-2 flex justify-end">
                    <AlertDialogCancel className="border border-input bg-transparent text-foreground hover:bg-muted cursor-pointer rounded px-3 py-1 text-sm">
                      Hủy
                    </AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleLogout}
                      variant="destructive"
                      className="bg-destructive! text-white! hover:bg-destructive/90! cursor-pointer font-medium rounded-md px-4 py-2 text-sm"
                    >
                      Đăng xuất
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="cursor-pointer"
              >
                <Link to="/login">Login</Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-6">
        <Outlet />
      </main>

      <footer className="border-t bg-muted/40 py-6 text-center text-xs text-muted-foreground">
        <p>© 2026 ShopApp - React Learning Lab</p>
      </footer>
    </div>
  );
}
