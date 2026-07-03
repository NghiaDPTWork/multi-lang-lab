import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen b-4">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-center"> Login Form</CardTitle>
          </CardHeader>

          <CardContent>
            <form action="submit" className="space-y-4">
              <div className="space-y-1">
                <Input type="email" placeholder="Please text email here ..." />
              </div>
              <div className="space-y-1">
                <Input type="password" placeholder="*****" />
              </div>
              <div className="space-y-1">
                <Button className="w-full">Login</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
