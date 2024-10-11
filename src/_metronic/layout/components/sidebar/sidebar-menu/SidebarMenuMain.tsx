import { SidebarMenuItemWithSub } from "./SidebarMenuItemWithSub";
import { SidebarMenuItem } from "./SidebarMenuItem";

const SidebarMenuMain = () => {
  return (
    <>
      {/* Существующие руты */}
      <SidebarMenuItem
        to="/dashboard"
        icon="element-11"
        title={"Главная"}
        fontIcon="bi-app-indicator"
      />
      {/* Клиенты */}
      <SidebarMenuItemWithSub
        to="/dashboard/clients"
        title="Клиенты"
        icon="profile-circle"
        fontIcon="bi-person"
      >
        <SidebarMenuItem
          to="/dashboard/clients"
          title="Клиенты"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/dashboard/credit"
          title="Кредитная"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/dashboard/lines-and-packages"
          title="Линии и пакеты"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/dashboard/appointments"
          title="Назначения"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/dashboard/order-rejection"
          title="Отказы от заказов"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/dashboard/gift-procedures"
          title="Подарочные процедуры"
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>

      {/* Справочник */}
      <SidebarMenuItemWithSub
        to="/dashboard/clients"
        title="Справочник"
        icon="profile-circle"
        fontIcon="bi-person"
      >
        <SidebarMenuItem
          to="/dashboard/devices"
          title="Аппараты"
          hasBullet={true}
        />
        <SidebarMenuItem to="/dashboard/bank" title="Банк" hasBullet={true} />
        <SidebarMenuItem
          to="/dashboard/call-status"
          title="Статусы звонков"
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>


  
    </>
  );
};

export { SidebarMenuMain };
