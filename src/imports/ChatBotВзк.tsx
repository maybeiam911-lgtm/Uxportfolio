import svgPaths from "./svg-n0myxhc4bo";
import imgImage from "figma:asset/b0e5423a7a88c8ce6eb8d4af67953cc1d74be814.png";

function Container() {
  return (
    <div className="absolute h-[16px] right-0 top-[calc(50%-1px)] translate-y-[-50%] w-[67px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 16">
        <g clipPath="url(#clip0_8_27052)" id="Container">
          <g id="Battery">
            <path d={svgPaths.p10163270} fill="var(--fill-0, black)" fillOpacity="0.36" id="Rectangle" />
            <rect fill="var(--fill-0, black)" height="7.66667" id="Rectangle_2" rx="1.6" width="18" x="45" y="4.07658" />
          </g>
          <path d={svgPaths.p30e84580} fill="var(--fill-0, black)" id="Combined Shape" />
          <path clipRule="evenodd" d={svgPaths.pb4b3500} fill="var(--fill-0, black)" fillRule="evenodd" id="Wi-Fi" />
        </g>
        <defs>
          <clipPath id="clip0_8_27052">
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
    <div className="relative shrink-0 w-full" data-name="Status bar">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[12px] pl-[19px] pr-[15px] pt-[14px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <g id="Outline">
            <path d={svgPaths.p2faf1100} id="Icon_2" stroke="var(--stroke-0, #8F8F93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p2110d180} fill="var(--fill-0, #1D1E26)" fillRule="evenodd" id="Icon_3" />
        </g>
      </svg>
    </button>
  );
}

function LeftAccessory() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="LeftAccessory">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[44px] items-center px-[16px] py-[10px] relative w-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center not-italic relative self-stretch shrink-0 text-center text-nowrap whitespace-pre" data-name="Title">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#1d1e26] text-[16px]">Ева</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#8f8f93] text-[12px]">Виртуальный помощник</p>
    </div>
  );
}

function Circle() {
  return (
    <div className="content-stretch flex items-start relative rounded-[1000px] shrink-0" data-name="Circle">
      <div className="relative shrink-0 size-[32px]" data-name="Image">
        <img alt="" className="block max-w-none size-full" height="32" src={imgImage} width="32" />
      </div>
    </div>
  );
}

function RightAccessory() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="RightAccessory">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex h-[44px] items-center justify-end px-[16px] py-[10px] relative w-full">
          <Circle />
        </div>
      </div>
    </div>
  );
}

function LeftTitleRight() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Left, Title, Right">
      <LeftAccessory />
      <Title />
      <RightAccessory />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="bg-white h-[4px] overflow-clip relative shrink-0 w-full" data-name="ProgressBar">
      <div className="absolute bg-[#4b4fbf] h-[4px] left-0 right-[99.73%] rounded-br-[12px] rounded-tr-[12px] top-0" data-name="Progress" />
    </div>
  );
}

function ProgressBar1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="ProgressBar">
      <ProgressBar />
    </div>
  );
}

function NavigationBars() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0" data-name="NavigationBars">
      <StatusBar />
      <LeftTitleRight />
      <ProgressBar1 />
    </div>
  );
}

function Message() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Message">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e26] text-[16px]">
        {`Привет! Моя любимая работа — заботиться о людях. А заботиться `}
        <br aria-hidden="true" />о вас мне особенно приятно.
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        Расскажу, как все устроено
      </p>
    </div>
  );
}

function RichTextView() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="RichTextView">
      <Message />
    </div>
  );
}

function Text() {
  return (
    <div className="box-border content-stretch flex items-center justify-end px-0 py-[2px] relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#8f8f93] text-[12px] text-center text-nowrap whitespace-pre">09:00</p>
    </div>
  );
}

function BubbleStatus() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="BubbleStatus">
      <Text />
    </div>
  );
}

function BubbleStatusView() {
  return (
    <div className="box-border content-stretch flex flex-col items-end justify-end pl-[8px] pr-0 py-0 relative shrink-0" data-name="BubbleStatusView">
      <BubbleStatus />
    </div>
  );
}

function ViewBubble() {
  return (
    <div className="basis-0 bg-[#f2f2f2] grow min-h-px min-w-px relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="View (Bubble)">
      <div className="flex flex-col items-end justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-end justify-end px-[12px] py-[8px] relative w-full">
          <RichTextView />
          <BubbleStatusView />
        </div>
      </div>
    </div>
  );
}

function View() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0 w-full" data-name="View">
      <ViewBubble />
    </div>
  );
}

function View1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="View">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-end pl-[16px] pr-[40px] py-[8px] relative w-full">
          <View />
        </div>
      </div>
    </div>
  );
}

function Bubble() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[375px]" data-name="Bubble">
      <View1 />
    </div>
  );
}

function Message1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Message">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#1d1e26] text-[16px] text-nowrap whitespace-pre">Начнем</p>
    </div>
  );
}

function RichTextView1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="RichTextView">
      <Message1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="box-border content-stretch flex items-center justify-end px-0 py-[2px] relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#8f8f93] text-[12px] text-center text-nowrap whitespace-pre">09:00</p>
    </div>
  );
}

function SystemCheckTwo() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="System / Check / Two">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="System / Check / Two">
          <path clipRule="evenodd" d={svgPaths.p2b310c00} fill="var(--fill-0, #4B4FBF)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[2px] py-0 relative shrink-0" data-name="Icon">
      <SystemCheckTwo />
    </div>
  );
}

function BubbleStatus1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="BubbleStatus">
      <Text1 />
      <Icon1 />
    </div>
  );
}

function BubbleStatusView1() {
  return (
    <div className="box-border content-stretch flex flex-col items-end justify-end pl-[8px] pr-0 py-0 relative shrink-0" data-name="BubbleStatusView">
      <BubbleStatus1 />
    </div>
  );
}

function ViewBubble1() {
  return (
    <div className="bg-[#ddf4c8] box-border content-stretch flex items-end justify-end px-[12px] py-[8px] relative rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="View (Bubble)">
      <RichTextView1 />
      <BubbleStatusView1 />
    </div>
  );
}

function View2() {
  return (
    <div className="content-stretch flex gap-[4px] items-end justify-end relative shrink-0 w-full" data-name="View">
      <ViewBubble1 />
    </div>
  );
}

function View3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="View">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-end pl-[40px] pr-[16px] py-[8px] relative w-full">
          <View2 />
        </div>
      </div>
    </div>
  );
}

function Bubble1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[375px]" data-name="Bubble">
      <View3 />
    </div>
  );
}

function Message2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Message">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e26] text-[16px]">
        Чтобы не пропустить прием лекарств или не принять лишнего, воспользуйтесь Дневником. Он сам обо всем напомнит.
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        Настроить Дневник сейчас?
      </p>
    </div>
  );
}

function RichTextView2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="RichTextView">
      <Message2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="box-border content-stretch flex items-center justify-end px-0 py-[2px] relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#8f8f93] text-[12px] text-center text-nowrap whitespace-pre">09:00</p>
    </div>
  );
}

function BubbleStatus2() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="BubbleStatus">
      <Text2 />
    </div>
  );
}

function BubbleStatusView2() {
  return (
    <div className="box-border content-stretch flex flex-col items-end justify-end pl-[8px] pr-0 py-0 relative shrink-0" data-name="BubbleStatusView">
      <BubbleStatus2 />
    </div>
  );
}

function ViewBubble2() {
  return (
    <div className="basis-0 bg-[#f2f2f2] grow min-h-px min-w-px relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="View (Bubble)">
      <div className="flex flex-col items-end justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-end justify-end px-[12px] py-[8px] relative w-full">
          <RichTextView2 />
          <BubbleStatusView2 />
        </div>
      </div>
    </div>
  );
}

function View4() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0 w-full" data-name="View">
      <ViewBubble2 />
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[#4b4fbf] relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[24px] py-[13px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Настроить Дневник лекарств</p>
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Buttons">
      <Content1 />
    </div>
  );
}

function BlockResolver() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-0 pt-[8px] px-0 relative shrink-0" data-name="BlockResolver">
      <Buttons />
    </div>
  );
}

function BubbleModifier() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="BubbleModifier">
      <BlockResolver />
    </div>
  );
}

function View5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="View">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-end pl-[16px] pr-[40px] py-[8px] relative w-full">
          <View4 />
          <BubbleModifier />
        </div>
      </div>
    </div>
  );
}

function Bubble2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[375px]" data-name="Bubble">
      <View5 />
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-[#e4e5f5] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[12px] shrink-0" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#4b4fbf] text-[14px] text-center text-nowrap whitespace-pre">В другой раз</p>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Buttons">
      <Content2 />
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0" data-name="Buttons">
      <Buttons1 />
    </div>
  );
}

function BlockResolver1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-end px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-[375px]" data-name="BlockResolver">
      <Buttons2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-end min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <Bubble />
      <Bubble1 />
      <Bubble2 />
      <BlockResolver1 />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="h-[34px] relative shrink-0 w-[375px]" data-name="Home indicator">
      <div className="absolute bg-[#1d1e26] bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[135px]" data-name="Line" />
    </div>
  );
}

export default function ChatBot() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Chat bot / ВЗК">
      <NavigationBars />
      <Content3 />
      <HomeIndicator />
    </div>
  );
}