import imgNotificationIconType from "figma:asset/90ddf17897348211e1ab87b25aae60cf0223e2eb.png";
import imgNotificationIconType1 from "figma:asset/a1bd918951dde8f1501f4e7a74036d039dca61dd.png";

export default function NotificationIconType() {
  return (
    <div className="overflow-clip relative rounded-[10px] size-full" data-name="_Notification Icon Type">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgNotificationIconType} />
        <div className="absolute bg-white inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-[5.26%] max-w-none size-[84.21%] top-[7.89%]" src={imgNotificationIconType1} />
        </div>
      </div>
    </div>
  );
}