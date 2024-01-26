import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "./ui/card";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
    return (
        <Card className="w-[420px]">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">
                    {label}
                </p>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="flex flex-row items-center justify-between rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium">
                        ID
                    </p>
                    <p className="truncate text-xs maxa-w-[140px] font-mono p-1 bg-slate-200 rounded-md">{user?.id}</p>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium">
                        Name
                    </p>
                    <p className="truncate text-xs maxa-w-[140px] font-mono p-1 bg-slate-200 rounded-md">{user?.name}</p>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium">
                        Email
                    </p>
                    <p className="truncate text-xs maxa-w-[140px] font-mono p-1 bg-slate-200 rounded-md">{user?.email}</p>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium">
                        Role
                    </p>
                    <p className="truncate text-xs maxa-w-[140px] font-mono p-1 bg-slate-200 rounded-md">{user?.role}</p>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium">
                        Two Factor Authentication
                    </p>
                    <p className="truncate text-xs maxa-w-[140px] font-mono p-1 bg-slate-200 rounded-md">{user?.isTwoFactorEnabled ? "ON" : "OFF"}</p>
                </div>
            </CardContent>
        </Card>
    )
}