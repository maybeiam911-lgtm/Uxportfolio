import svgPaths from "./svg-wffnlskwbd";
import imgImage from "figma:asset/e80e5cd269a16b06dbeae4209ef2eb539afae6ac.png";
import imgImage1 from "figma:asset/0e840211593bfcc74538fb726fa52b1155f1ccb1.png";
import imgImage2 from "figma:asset/419e0d8e418ae7eae36cf3085d47ee398de6c93a.png";
import imgDefault from "figma:asset/1817f0795ba9297ad12786403b9d80d66653561e.png";

function Container() {
  return (
    <div className="absolute h-[16px] right-0 top-[calc(50%-1px)] translate-y-[-50%] w-[67px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 16">
        <g clipPath="url(#clip0_1_1429)" id="Container">
          <g id="Battery">
            <path d={svgPaths.p10163270} fill="var(--fill-0, black)" fillOpacity="0.36" id="Rectangle" />
            <rect fill="var(--fill-0, black)" height="7.66667" id="Rectangle_2" rx="1.6" width="18" x="45" y="4.07658" />
          </g>
          <path d={svgPaths.p30e84580} fill="var(--fill-0, black)" id="Combined Shape" />
          <path clipRule="evenodd" d={svgPaths.pb4b3500} fill="var(--fill-0, black)" fillRule="evenodd" id="Wi-Fi" />
        </g>
        <defs>
          <clipPath id="clip0_1_1429">
            <rect fill="white" height="16" width="67" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="h-[18px] relative shrink-0 w-[341px]" data-name="Content">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[18px] left-[27px] not-italic text-[15px] text-black text-center top-[calc(50%-9px)] tracking-[-0.165px] translate-x-[-50%] w-[54px]">9:41</p>
      <Container />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-start pb-[12px] pl-[19px] pr-[15px] pt-[14px] relative shrink-0" data-name="Status bar">
      <Content />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center px-[16px] py-0 relative shrink-0 w-[375px]" data-name="Header">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#454a52] text-[25px] w-[295px]">Доброе утро!</p>
    </div>
  );
}

function SystemArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="System / Arrow / Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="System / Arrow / Right">
          <path clipRule="evenodd" d={svgPaths.p3b14270} fill="var(--fill-0, #1D1E26)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Header1() {
  return (
    <div className="box-border content-stretch flex gap-[20px] items-start pb-[8px] pt-[16px] px-[16px] relative shrink-0 w-[375px]" data-name="Header">
      <div className="basis-0 flex flex-col font-['Inter:Bold',sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e26] text-[18px]">
        <p className="leading-[24px]">Мои лекарства</p>
      </div>
      <SystemArrowRight />
    </div>
  );
}

function Separator() {
  return (
    <div className="h-px relative shrink-0 w-[375px]" data-name="Separator">
      <div className="absolute bg-[#dddee3] bottom-0 left-0 right-0 top-1/2" data-name="Separator" />
    </div>
  );
}

function Picker() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Picker">
      <Separator />
      <div className="h-[9px] relative shrink-0 w-[11px]">
        <div className="absolute bottom-[10.2%] left-[7.1%] right-[7.1%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
            <path d={svgPaths.p38816f80} fill="var(--fill-0, #1D1E26)" id="Polygon 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8f8f93] text-[12px] text-center text-nowrap">
        <p className="leading-[14px] whitespace-pre">П</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="absolute left-0 size-[40px] top-0" data-name="Dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #EBEEF3)" id="Dot" r="20" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[#1d1e26] text-[14px] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="??">
      <Title />
      <Button />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8f8f93] text-[12px] text-center text-nowrap">
        <p className="leading-[14px] whitespace-pre">П</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="absolute left-0 size-[40px] top-0" data-name="Dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #EBEEF3)" id="Dot" r="20" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-1px)] not-italic text-[#1d1e26] text-[14px] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">13</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="??">
      <Title1 />
      <Button1 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8f8f93] text-[12px] text-center text-nowrap">
        <p className="leading-[14px] whitespace-pre">П</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="absolute left-0 size-[40px] top-0" data-name="Dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #EBEEF3)" id="Dot" r="20" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-1px)] not-italic text-[#1d1e26] text-[14px] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">14</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="??">
      <Title2 />
      <Button2 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8f8f93] text-[12px] text-center text-nowrap">
        <p className="leading-[14px] whitespace-pre">П</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="absolute left-0 size-[40px] top-0" data-name="Dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #EBEEF3)" id="Dot" r="20" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-1px)] not-italic text-[#1d1e26] text-[14px] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">15</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="??">
      <Title3 />
      <Button3 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8f8f93] text-[12px] text-center text-nowrap">
        <p className="leading-[14px] whitespace-pre">П</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="absolute left-0 size-[40px] top-0" data-name="Dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #EBEEF3)" id="Dot" r="20" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-1px)] not-italic text-[#1d1e26] text-[14px] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">16</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="??">
      <Title4 />
      <Button4 />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-full" data-name="Title">
      <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #1D1E26)" id="Ellipse 821" r="8" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[6.686px]">
        <p className="leading-[14px]">П</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="absolute left-0 size-[40px] top-0" data-name="Dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #EBEEF3)" id="Dot" r="20" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[#1d1e26] text-[14px] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="??">
      <Title5 />
      <Button5 />
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8f8f93] text-[12px] text-center text-nowrap">
        <p className="leading-[14px] whitespace-pre">П</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="absolute left-0 size-[40px] top-0" data-name="Dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #EBEEF3)" id="Dot" r="20" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-1px)] not-italic text-[#1d1e26] text-[14px] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">18</p>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="??">
      <Title6 />
      <Button6 />
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8f8f93] text-[12px] text-center text-nowrap">
        <p className="leading-[14px] whitespace-pre">П</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="absolute left-0 size-[40px] top-0" data-name="Dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #EBEEF3)" id="Dot" r="20" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-1px)] not-italic text-[#1d1e26] text-[14px] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">19</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="??">
      <Title7 />
      <Button7 />
    </div>
  );
}

function Title8() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8f8f93] text-[12px] text-center text-nowrap">
        <p className="leading-[14px] whitespace-pre">П</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="absolute left-0 size-[40px] top-0" data-name="Dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #EBEEF3)" id="Dot" r="20" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-1px)] not-italic text-[#1d1e26] text-[14px] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">20</p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="??">
      <Title8 />
      <Button8 />
    </div>
  );
}

function Title9() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8f8f93] text-[12px] text-center text-nowrap">
        <p className="leading-[14px] whitespace-pre">П</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="absolute left-0 size-[40px] top-0" data-name="Dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #EBEEF3)" id="Dot" r="20" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-1px)] not-italic text-[#1d1e26] text-[14px] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">21</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="??">
      <Title9 />
      <Button9 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
      <Component8 />
      <Component9 />
      <Component />
    </div>
  );
}

function Picker1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-center overflow-clip pb-[8px] pt-[4px] px-0 relative shrink-0 w-[375px]" data-name="Picker">
      <Picker />
      <Content1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-[#e4e5f5] relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[13px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#4b4fbf] text-[16px] text-center text-nowrap whitespace-pre">Добавить препарат</p>
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Buttons">
      <Content2 />
    </div>
  );
}

function BottomDiv() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[8px] relative shrink-0 w-[375px]" data-name="BottomDiv">
      <Buttons />
    </div>
  );
}

function PillWidjet() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-name="PillWidjet">
      <Header1 />
      <Picker1 />
      <BottomDiv />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute left-0 size-[120px] top-0" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Story() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0" data-name="Story">
      <Image />
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.2] left-[12px] text-[#454a52] text-[12px] top-[12px] w-[96px]">Пользуйтесь ингаляторами правильно</p>
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute left-0 size-[120px] top-0" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Story1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0" data-name="Story">
      <Image1 />
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.2] left-[12px] text-[#454a52] text-[12px] top-[12px] w-[96px]">Приступ астмы</p>
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute left-0 size-[120px] top-0" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Story2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0" data-name="Story">
      <Image2 />
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.2] left-[12px] text-[#454a52] text-[12px] top-[12px] w-[96px]">Астма и физическая активность</p>
    </div>
  );
}

function GroupCard() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[8px] grow items-center min-h-px min-w-px overflow-x-auto overflow-y-clip pb-[16px] pt-[4px] px-0 relative shrink-0 w-[375px]" data-name="GroupCard">
      <Story />
      <Story1 />
      <Story2 />
    </div>
  );
}

function Portlet() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[140px] items-start overflow-clip px-[16px] py-0 relative shrink-0 w-[376px]" data-name="Portlet">
      <GroupCard />
    </div>
  );
}

function SystemArrowRight1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="System / Arrow / Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="System / Arrow / Right">
          <path clipRule="evenodd" d={svgPaths.p3b14270} fill="var(--fill-0, #1D1E26)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Header2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[20px] items-start pb-[8px] pt-[16px] px-[16px] relative shrink-0 w-[375px]" data-name="Header">
      <div className="basis-0 flex flex-col font-['Inter:Bold',sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e26] text-[18px]">
        <p className="leading-[24px]">Аналитика астмы</p>
      </div>
      <SystemArrowRight1 />
    </div>
  );
}

function ContentTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="ContentTitle">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e26] text-[16px]">У вас пока нет измерений ПСВ</p>
    </div>
  );
}

function ContentDescription() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="ContentDescription">
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#8f8f93] text-[14px]">
        <p className="leading-[20px]">Отмечайте значение ПСВ, чтобы видеть статистику</p>
      </div>
    </div>
  );
}

function CellContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="CellContent">
      <ContentTitle />
      <ContentDescription />
    </div>
  );
}

function Cell() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cell">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-0 relative w-full">
          <CellContent />
        </div>
      </div>
    </div>
  );
}

function Separator1() {
  return <div className="h-px shrink-0 w-full" data-name="Separator" />;
}

function Separator2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Separator">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pl-[16px] pr-0 py-0 relative w-full">
          <Separator1 />
        </div>
      </div>
    </div>
  );
}

function CellDontUse() {
  return (
    <div className="bg-[#f5f7fb] box-border content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[13px] px-0 relative shrink-0 w-full" data-name="Cell [DON\'T USE|">
      <Cell />
      <Separator2 />
    </div>
  );
}

function SystemPlus() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="System / Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="System / Plus">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p5bea000} fill="var(--fill-0, #4B4FBF)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p337de800} fill="var(--fill-0, #4B4FBF)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-[#e4e5f5] box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[13px] relative rounded-[12px] shrink-0" data-name="Content">
      <SystemPlus />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#4b4fbf] text-[16px] text-center text-nowrap whitespace-pre">Добавить измерение</p>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-[#e4e5f5] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[12px] shrink-0 w-full" data-name="Buttons">
      <Content3 />
    </div>
  );
}

function Button10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[12px] pt-[4px] px-[16px] relative w-full">
          <Buttons1 />
        </div>
      </div>
    </div>
  );
}

function Extra() {
  return (
    <div className="bg-[#f5f7fb] box-border content-stretch flex flex-col items-start overflow-clip px-0 py-[4px] relative rounded-[12px] shrink-0 w-full" data-name="Extra">
      <CellDontUse />
      <Button10 />
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-[4px] relative w-full">
          <Extra />
        </div>
      </div>
    </div>
  );
}

function CardCell() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="CardCell">
      <Header2 />
      <Content4 />
    </div>
  );
}

function ContentTitle1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="ContentTitle">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e26] text-[16px]">У вас пока нет симптомов</p>
    </div>
  );
}

function ContentDescription1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="ContentDescription">
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#8f8f93] text-[14px]">
        <p className="leading-[20px]">Отмечайте симптомы, чтобы видеть статистику</p>
      </div>
    </div>
  );
}

function CellContent1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="CellContent">
      <ContentTitle1 />
      <ContentDescription1 />
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cell">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-0 relative w-full">
          <CellContent1 />
        </div>
      </div>
    </div>
  );
}

function Separator3() {
  return <div className="h-px shrink-0 w-full" data-name="Separator" />;
}

function Separator4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Separator">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pl-[16px] pr-0 py-0 relative w-full">
          <Separator3 />
        </div>
      </div>
    </div>
  );
}

function CellDontUse1() {
  return (
    <div className="bg-[#f5f7fb] box-border content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[13px] px-0 relative shrink-0 w-full" data-name="Cell [DON\'T USE|">
      <Cell1 />
      <Separator4 />
    </div>
  );
}

function SystemPlus1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="System / Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="System / Plus">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p5bea000} fill="var(--fill-0, #4B4FBF)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p337de800} fill="var(--fill-0, #4B4FBF)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Content5() {
  return (
    <div className="bg-[#e4e5f5] box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[13px] relative rounded-[12px] shrink-0" data-name="Content">
      <SystemPlus1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#4b4fbf] text-[16px] text-center text-nowrap whitespace-pre">Добавить симптомы</p>
    </div>
  );
}

function Buttons3() {
  return (
    <div className="bg-[#e4e5f5] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[12px] shrink-0 w-full" data-name="Buttons">
      <Content5 />
    </div>
  );
}

function Button11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[12px] pt-[4px] px-[16px] relative w-full">
          <Buttons3 />
        </div>
      </div>
    </div>
  );
}

function Extra1() {
  return (
    <div className="bg-[#f5f7fb] box-border content-stretch flex flex-col items-start overflow-clip px-0 py-[4px] relative rounded-[12px] shrink-0 w-full" data-name="Extra">
      <CellDontUse1 />
      <Button11 />
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-[4px] relative w-full">
          <Extra1 />
        </div>
      </div>
    </div>
  );
}

function CardCell1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="CardCell">
      <Content6 />
    </div>
  );
}

function Content7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[768px] items-start left-[-1px] top-0 w-[376px]" data-name="Content">
      <StatusBar />
      <Header />
      <PillWidjet />
      <Portlet />
      <CardCell />
      <CardCell1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="absolute bottom-0 left-[-0.63%] right-[-0.63%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 24">
          <g id="Group 2">
            <g id="Rectangle"></g>
            <path d={svgPaths.p19632700} fill="var(--fill-0, #0684F8)" id="Vector" stroke="var(--stroke-0, #0684F8)" strokeWidth="0.3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
      <Group1 />
      <p className="font-['Montserrat:Medium',sans-serif] font-medium h-[12px] leading-[14px] relative shrink-0 text-[#0684f8] text-[10px] text-center w-[71px]">Здоровье</p>
    </div>
  );
}

function Calendar() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Rectangle"></g>
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p38ad2600} fill="#818894" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2d71080} fill="#818894" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p61f0100} fill="#818894" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p14e9af00} fill="#818894" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
      <Calendar />
      <p className="font-['Montserrat:Medium',sans-serif] font-medium h-[12px] leading-[14px] relative shrink-0 text-[#818894] text-[10px] text-center w-[48px]">Запись</p>
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[24px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Rectangle"></g>
          <g id="Union">
            <path d={svgPaths.p35f99980} fill="var(--fill-0, #818894)" />
            <path d={svgPaths.p18dd1380} fill="var(--fill-0, #818894)" />
            <path clipRule="evenodd" d={svgPaths.p10d3b880} fill="var(--fill-0, #818894)" fillRule="evenodd" />
            <path d={svgPaths.p2d3a2200} fill="var(--fill-0, #818894)" />
            <path d={svgPaths.p8ff60c0} fill="var(--fill-0, #818894)" />
            <path d={svgPaths.p15e05b80} fill="var(--fill-0, #818894)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Group />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
      <Group2 />
      <p className="font-['Montserrat:Medium',sans-serif] font-medium h-[12px] leading-[14px] relative shrink-0 text-[#818894] text-[10px] text-center w-[53px]">Полезное</p>
    </div>
  );
}

function Award() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="award">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_8_27075)" id="award">
          <path d={svgPaths.p2f97fd80} fill="var(--fill-0, #818894)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_8_27075">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
      <Award />
      <p className="font-['Montserrat:Medium',sans-serif] font-medium h-[12px] leading-[14px] relative shrink-0 text-[#818894] text-[10px] text-center w-[27px]">Чаты</p>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_8_27092)" id="settings">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p30a1d300} fill="#818894" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p177f1380} fill="#818894" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_8_27092">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
      <Settings />
      <p className="font-['Montserrat:Medium',sans-serif] font-medium h-[12px] leading-[14px] relative shrink-0 text-[#818894] text-[10px] text-center w-[58px]">Настройки</p>
      <div className="absolute left-[calc(50%+17px)] size-[7px] top-[-1px] translate-x-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FC5656)" id="Ellipse 100" r="3.5" />
        </svg>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="box-border content-stretch flex items-start pb-[4px] pt-[8px] px-0 relative shrink-0 w-full" data-name="Tabs">
      <Frame4 />
      <Frame3 />
      <Frame2 />
      <Frame1 />
      <Frame />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="Home indicator">
      <div className="absolute bg-[#1d1e26] bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[135px]" data-name="Line" />
    </div>
  );
}

function TabBarZd() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-start left-1/2 translate-x-[-50%]" data-name="TabBarZD">
      <Tabs />
      <HomeIndicator />
    </div>
  );
}

function HomeIndicator1() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[95.81%]" data-name="Home indicator">
      <div className="absolute bg-white bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[135px]" data-name="Line" />
    </div>
  );
}

function Cross() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Cross">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Cross">
          <path d={svgPaths.p197d7200} fill="var(--fill-0, #8F8F93)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Cross1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cross">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col items-end px-[16px] py-0 relative w-full">
          <Cross />
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center leading-[0] not-italic pb-[24px] pt-[8px] px-[16px] relative text-[#1d1e26] text-center w-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-end relative shrink-0 text-[24px] w-full">
            <p className="leading-[32px]">Спасибо!</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[16px] w-full max-w-[260px] mx-auto">
            <p className="leading-[22px]">Поделитесь оценкой в App Store, чтобы помочь другим пользователям сделать выбор</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Default() {
  return (
    <div className="overflow-clip relative shrink-0 size-[36px]" data-name="Default">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-[-28.13%] max-w-none size-[156.25%] top-[-21.88%]" src={imgDefault} />
      </div>
    </div>
  );
}

function Placeholder() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Placeholder">
      <div className="flex flex-row items-center justify-center overflow-x-clip overflow-y-auto size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center pb-[24px] pt-0 px-[24px] relative w-full">
          {[...Array(5).keys()].map((_, i) => (
            <Default key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="bg-[#4b4fbf] relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[13px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Перейти в App Store</p>
        </div>
      </div>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Buttons - 2">
      <Content9 />
    </div>
  );
}

function ButtonDiv() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="ButtonDiv">
      <Buttons2 />
    </div>
  );
}

function Modifier() {
  return (
    <div className="relative shrink-0 w-full" data-name="Modifier">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[8px] pt-0 px-[16px] relative w-full">
          <Placeholder />
          <ButtonDiv />
        </div>
      </div>
    </div>
  );
}

function TextButtons() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="TextButtons">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center px-[16px] py-[13px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#4b4fbf] text-[16px] text-nowrap whitespace-pre">Не сейчас</p>
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="absolute bg-white bottom-[50px] box-border content-stretch flex flex-col items-center justify-end left-[16px] pb-[8px] pt-[16px] px-0 right-[16px] rounded-[16px]" data-name="Content">
      <Cross1 />
      <Content8 />
      <Modifier />
      <TextButtons />
    </div>
  );
}

function Modal() {
  return (
    <div className="absolute bottom-0 h-[812px] left-0 w-[375px]" data-name="Modal">
      <div className="absolute bg-[rgba(29,30,38,0.5)] inset-0" data-name="Overlay" />
      <HomeIndicator1 />
      <Content10 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white relative size-full" data-name="Home">
      <Content7 />
      <TabBarZd />
      <Modal />
    </div>
  );
}