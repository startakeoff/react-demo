/*
 * @Author: shadow
 * @Date: 2023-12-11 16:39:00
 * @LastEditors: shadow
 * @LastEditTime: 2023-12-11 16:39:01
 * @Description: 请填写简介
 */
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
