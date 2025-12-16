import svgPaths from "./svg-m67b5hxgbr";
import imgImage from "figma:asset/b0e5423a7a88c8ce6eb8d4af67953cc1d74be814.png";
import imgImage1 from "figma:asset/ee75351b6b3c2f8a389f7f520ad70ad8bb6bcd52.png";

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
        Я - Ева, вирутальный помощник. Моя любимая работа - заботиться о людях. А заботиться о вас мне особенно приятно.
        <br aria-hidden="true" />
        {`Программа "ВЗК под контролем" - это умные сервисы для отслеживания состояния ЖКТ и знания о доступных методах лечения и способах облегчить течение и симптомы заболевания.`}
        <br aria-hidden="true" />Я помогу во всем разобраться.
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

function Content1() {
  return (
    <div className="bg-[#e4e5f5] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[12px] shrink-0" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#4b4fbf] text-[14px] text-center text-nowrap whitespace-pre">Начнем</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Buttons">
      <Content1 />
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0" data-name="Buttons">
      <Buttons />
    </div>
  );
}

function BlockResolver() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-end px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-[375px]" data-name="BlockResolver">
      <Buttons1 />
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
        Многие люди забывают принимать медикаменты вовремя. Чтобы вы не столкнулись со сложностями в соблюдении режима лечения, мы разработали Дневник приема препаратов - он напомнит о времени приема лекарств.
        <br aria-hidden="true" /> <br aria-hidden="true" />
        Настроим Дневник прямо сейчас?
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

function Content2() {
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

function Buttons2() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Buttons">
      <Content2 />
    </div>
  );
}

function BlockResolver1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-0 pt-[8px] px-0 relative shrink-0" data-name="BlockResolver">
      <Buttons2 />
    </div>
  );
}

function BubbleModifier() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="BubbleModifier">
      <BlockResolver1 />
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

function Content3() {
  return (
    <div className="bg-[#e4e5f5] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[12px] shrink-0" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#4b4fbf] text-[14px] text-center text-nowrap whitespace-pre">В другой раз</p>
    </div>
  );
}

function Buttons3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Buttons">
      <Content3 />
    </div>
  );
}

function Buttons4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0" data-name="Buttons">
      <Buttons3 />
    </div>
  );
}

function BlockResolver2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-end px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-[375px]" data-name="BlockResolver">
      <Buttons4 />
    </div>
  );
}

function Message3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Message">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e26] text-[16px]">
        {`Воспалительные заболевания кишечника – это группа хронических болезней, которые можно взять под контроль при правильном лечении и соблюдении назначенных рекомендаций. Для помощи вам на этом пути мы подготовили сервисы: `}
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        Дневник поможет отслеживать симптомы и состояние ЖКТ
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        Образовательные материалы расскажут о лечении и образе жизни
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        Профильные центры ВЗК подскажут, куда обратиться за медицинской помощью
        <br aria-hidden="true" />
        <br aria-hidden="true" />С чего начнем?
      </p>
    </div>
  );
}

function RichTextView3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="RichTextView">
      <Message3 />
    </div>
  );
}

function Text3() {
  return (
    <div className="box-border content-stretch flex items-center justify-end px-0 py-[2px] relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#8f8f93] text-[12px] text-center text-nowrap whitespace-pre">09:00</p>
    </div>
  );
}

function BubbleStatus3() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="BubbleStatus">
      <Text3 />
    </div>
  );
}

function BubbleStatusView3() {
  return (
    <div className="box-border content-stretch flex flex-col items-end justify-end pl-[8px] pr-0 py-0 relative shrink-0" data-name="BubbleStatusView">
      <BubbleStatus3 />
    </div>
  );
}

function ViewBubble3() {
  return (
    <div className="basis-0 bg-[#f2f2f2] grow min-h-px min-w-px relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="View (Bubble)">
      <div className="flex flex-col items-end justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-end justify-end px-[12px] py-[8px] relative w-full">
          <RichTextView3 />
          <BubbleStatusView3 />
        </div>
      </div>
    </div>
  );
}

function View6() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0 w-full" data-name="View">
      <ViewBubble3 />
    </div>
  );
}

function View7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="View">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-end pl-[16px] pr-[40px] py-[8px] relative w-full">
          <View6 />
        </div>
      </div>
    </div>
  );
}

function Bubble3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[375px]" data-name="Bubble">
      <View7 />
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-[#e4e5f5] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[12px] shrink-0" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#4b4fbf] text-[14px] text-center text-nowrap whitespace-pre">Дневник ЖКТ</p>
    </div>
  );
}

function Buttons5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Buttons">
      <Content4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="bg-[#e4e5f5] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[12px] shrink-0" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#4b4fbf] text-[14px] text-center text-nowrap whitespace-pre">Подкасты</p>
    </div>
  );
}

function Buttons6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Buttons">
      <Content5 />
    </div>
  );
}

function Buttons7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0" data-name="Buttons">
      <Buttons5 />
      <Buttons6 />
    </div>
  );
}

function Content6() {
  return (
    <div className="bg-[#e4e5f5] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[12px] shrink-0" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#4b4fbf] text-[14px] text-center text-nowrap whitespace-pre">Образовательные материалы</p>
    </div>
  );
}

function Buttons8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Buttons">
      <Content6 />
    </div>
  );
}

function Buttons9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0" data-name="Buttons">
      <Buttons8 />
    </div>
  );
}

function Content7() {
  return (
    <div className="bg-[#e4e5f5] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[12px] shrink-0" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#4b4fbf] text-[14px] text-center text-nowrap whitespace-pre">Профильные центры</p>
    </div>
  );
}

function Buttons10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Buttons">
      <Content7 />
    </div>
  );
}

function Buttons11() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0" data-name="Buttons">
      <Buttons10 />
    </div>
  );
}

function BlockResolver3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-end px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-[375px]" data-name="BlockResolver">
      <Buttons7 />
      <Buttons9 />
      <Buttons11 />
    </div>
  );
}

function Message4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Message">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#1d1e26] text-[16px] text-nowrap whitespace-pre">Дневник ЖКТ</p>
    </div>
  );
}

function RichTextView4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="RichTextView">
      <Message4 />
    </div>
  );
}

function Text4() {
  return (
    <div className="box-border content-stretch flex items-center justify-end px-0 py-[2px] relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#8f8f93] text-[12px] text-center text-nowrap whitespace-pre">09:00</p>
    </div>
  );
}

function SystemCheckTwo1() {
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

function Icon2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[2px] py-0 relative shrink-0" data-name="Icon">
      <SystemCheckTwo1 />
    </div>
  );
}

function BubbleStatus4() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="BubbleStatus">
      <Text4 />
      <Icon2 />
    </div>
  );
}

function BubbleStatusView4() {
  return (
    <div className="box-border content-stretch flex flex-col items-end justify-end pl-[8px] pr-0 py-0 relative shrink-0" data-name="BubbleStatusView">
      <BubbleStatus4 />
    </div>
  );
}

function ViewBubble4() {
  return (
    <div className="bg-[#ddf4c8] box-border content-stretch flex items-end justify-end px-[12px] py-[8px] relative rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="View (Bubble)">
      <RichTextView4 />
      <BubbleStatusView4 />
    </div>
  );
}

function View8() {
  return (
    <div className="content-stretch flex gap-[4px] items-end justify-end relative shrink-0 w-full" data-name="View">
      <ViewBubble4 />
    </div>
  );
}

function View9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="View">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-end pl-[40px] pr-[16px] py-[8px] relative w-full">
          <View8 />
        </div>
      </div>
    </div>
  );
}

function Bubble4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[375px]" data-name="Bubble">
      <View9 />
    </div>
  );
}

function Message5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Message">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e26] text-[16px]">
        Дневник ЖКТ поможет отследить динамику симптомов. А еще дневником можно поделиться с врачом, чтобы отслеживать текущее состояние и подобрать подходящее лечение.
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        Сделаем первую запись?
      </p>
    </div>
  );
}

function RichTextView5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="RichTextView">
      <Message5 />
    </div>
  );
}

function Text5() {
  return (
    <div className="box-border content-stretch flex items-center justify-end px-0 py-[2px] relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#8f8f93] text-[12px] text-center text-nowrap whitespace-pre">09:00</p>
    </div>
  );
}

function BubbleStatus5() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="BubbleStatus">
      <Text5 />
    </div>
  );
}

function BubbleStatusView5() {
  return (
    <div className="box-border content-stretch flex flex-col items-end justify-end pl-[8px] pr-0 py-0 relative shrink-0" data-name="BubbleStatusView">
      <BubbleStatus5 />
    </div>
  );
}

function ViewBubble5() {
  return (
    <div className="basis-0 bg-[#f2f2f2] grow min-h-px min-w-px relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="View (Bubble)">
      <div className="flex flex-col items-end justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-end justify-end px-[12px] py-[8px] relative w-full">
          <RichTextView5 />
          <BubbleStatusView5 />
        </div>
      </div>
    </div>
  );
}

function View10() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0 w-full" data-name="View">
      <ViewBubble5 />
    </div>
  );
}

function Content8() {
  return (
    <div className="bg-[#4b4fbf] relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[24px] py-[13px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Перейти в дневник ЖКТ</p>
        </div>
      </div>
    </div>
  );
}

function Buttons12() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Buttons">
      <Content8 />
    </div>
  );
}

function BlockResolver4() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-0 pt-[8px] px-0 relative shrink-0" data-name="BlockResolver">
      <Buttons12 />
    </div>
  );
}

function BubbleModifier1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="BubbleModifier">
      <BlockResolver4 />
    </div>
  );
}

function View11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="View">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-end pl-[16px] pr-[40px] py-[8px] relative w-full">
          <View10 />
          <BubbleModifier1 />
        </div>
      </div>
    </div>
  );
}

function Bubble5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[375px]" data-name="Bubble">
      <View11 />
    </div>
  );
}

function Content9() {
  return (
    <div className="bg-[#e4e5f5] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[12px] shrink-0" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#4b4fbf] text-[14px] text-center text-nowrap whitespace-pre">Не сейчас</p>
    </div>
  );
}

function Buttons13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Buttons">
      <Content9 />
    </div>
  );
}

function Buttons14() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0" data-name="Buttons">
      <Buttons13 />
    </div>
  );
}

function BlockResolver5() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="BlockResolver">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-end px-[16px] py-[8px] relative w-full">
          <Buttons14 />
        </div>
      </div>
    </div>
  );
}

function Message6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Message">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e26] text-[16px]">
        {`Каждая запись в Дневнике — большой шаг вперед. `}
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        Аналитика покажет частоту и характер приступов. Этим тоже можно поделиться с врачом — даже онлайн
      </p>
    </div>
  );
}

function RichTextView6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="RichTextView">
      <Message6 />
    </div>
  );
}

function Text6() {
  return (
    <div className="box-border content-stretch flex items-center justify-end px-0 py-[2px] relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#8f8f93] text-[12px] text-center text-nowrap whitespace-pre">09:00</p>
    </div>
  );
}

function BubbleStatus6() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="BubbleStatus">
      <Text6 />
    </div>
  );
}

function BubbleStatusView6() {
  return (
    <div className="box-border content-stretch flex flex-col items-end justify-end pl-[8px] pr-0 py-0 relative shrink-0" data-name="BubbleStatusView">
      <BubbleStatus6 />
    </div>
  );
}

function ViewBubble6() {
  return (
    <div className="basis-0 bg-[#f2f2f2] grow min-h-px min-w-px relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="View (Bubble)">
      <div className="flex flex-col items-end justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-end justify-end px-[12px] py-[8px] relative w-full">
          <RichTextView6 />
          <BubbleStatusView6 />
        </div>
      </div>
    </div>
  );
}

function View12() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0 w-full" data-name="View">
      <ViewBubble6 />
    </div>
  );
}

function Media() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0 w-full" data-name="Media">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebeef3] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function NodeResolver() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[8px] grow h-full items-center justify-end min-h-px min-w-px pb-0 pt-[8px] px-0 relative rounded-[12px] shrink-0" data-name="NodeResolver">
      <Media />
    </div>
  );
}

function BubbleModifier2() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="BubbleModifier">
      <NodeResolver />
    </div>
  );
}

function View13() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="View">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[16px] pr-[40px] py-[8px] relative size-full">
          <View12 />
          <BubbleModifier2 />
        </div>
      </div>
    </div>
  );
}

function Bubble6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[508px] items-center relative shrink-0 w-[375px]" data-name="Bubble">
      <View13 />
    </div>
  );
}

function Content10() {
  return (
    <div className="bg-[#e4e5f5] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[12px] shrink-0" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#4b4fbf] text-[14px] text-center text-nowrap whitespace-pre">Дальше</p>
    </div>
  );
}

function Buttons15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Buttons">
      <Content10 />
    </div>
  );
}

function Buttons16() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0" data-name="Buttons">
      <Buttons15 />
    </div>
  );
}

function BlockResolver6() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="BlockResolver">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-end px-[16px] py-[8px] relative w-full">
          <Buttons16 />
        </div>
      </div>
    </div>
  );
}

function Message7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Message">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#1d1e26] text-[16px] text-nowrap whitespace-pre">Дальше</p>
    </div>
  );
}

function RichTextView7() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="RichTextView">
      <Message7 />
    </div>
  );
}

function Text7() {
  return (
    <div className="box-border content-stretch flex items-center justify-end px-0 py-[2px] relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#8f8f93] text-[12px] text-center text-nowrap whitespace-pre">09:00</p>
    </div>
  );
}

function SystemCheckTwo2() {
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

function Icon3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[2px] py-0 relative shrink-0" data-name="Icon">
      <SystemCheckTwo2 />
    </div>
  );
}

function BubbleStatus7() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="BubbleStatus">
      <Text7 />
      <Icon3 />
    </div>
  );
}

function BubbleStatusView7() {
  return (
    <div className="box-border content-stretch flex flex-col items-end justify-end pl-[8px] pr-0 py-0 relative shrink-0" data-name="BubbleStatusView">
      <BubbleStatus7 />
    </div>
  );
}

function ViewBubble7() {
  return (
    <div className="bg-[#ddf4c8] box-border content-stretch flex items-end justify-end px-[12px] py-[8px] relative rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="View (Bubble)">
      <RichTextView7 />
      <BubbleStatusView7 />
    </div>
  );
}

function View14() {
  return (
    <div className="content-stretch flex gap-[4px] items-end justify-end relative shrink-0 w-full" data-name="View">
      <ViewBubble7 />
    </div>
  );
}

function View15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="View">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-end pl-[40px] pr-[16px] py-[8px] relative w-full">
          <View14 />
        </div>
      </div>
    </div>
  );
}

function Bubble7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[375px]" data-name="Bubble">
      <View15 />
    </div>
  );
}

function Message8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Message">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e26] text-[16px]">
        {`Библиотека — это сборник статей и видео от практикующих врачей. Поможет разобраться в питании, образе жизни, вариантах лечения и многом другом. `}
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        Посмотрим?
      </p>
    </div>
  );
}

function RichTextView8() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="RichTextView">
      <Message8 />
    </div>
  );
}

function Text8() {
  return (
    <div className="box-border content-stretch flex items-center justify-end px-0 py-[2px] relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#8f8f93] text-[12px] text-center text-nowrap whitespace-pre">09:00</p>
    </div>
  );
}

function BubbleStatus8() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="BubbleStatus">
      <Text8 />
    </div>
  );
}

function BubbleStatusView8() {
  return (
    <div className="box-border content-stretch flex flex-col items-end justify-end pl-[8px] pr-0 py-0 relative shrink-0" data-name="BubbleStatusView">
      <BubbleStatus8 />
    </div>
  );
}

function ViewBubble8() {
  return (
    <div className="basis-0 bg-[#f2f2f2] grow min-h-px min-w-px relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="View (Bubble)">
      <div className="flex flex-col items-end justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-end justify-end px-[12px] py-[8px] relative w-full">
          <RichTextView8 />
          <BubbleStatusView8 />
        </div>
      </div>
    </div>
  );
}

function View16() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0 w-full" data-name="View">
      <ViewBubble8 />
    </div>
  );
}

function Content11() {
  return (
    <div className="bg-[#4b4fbf] relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[24px] py-[13px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Открыть Библиотеку</p>
        </div>
      </div>
    </div>
  );
}

function Buttons17() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Buttons">
      <Content11 />
    </div>
  );
}

function BlockResolver7() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-0 pt-[8px] px-0 relative shrink-0" data-name="BlockResolver">
      <Buttons17 />
    </div>
  );
}

function BubbleModifier3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="BubbleModifier">
      <BlockResolver7 />
    </div>
  );
}

function View17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="View">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-end pl-[16px] pr-[40px] py-[8px] relative w-full">
          <View16 />
          <BubbleModifier3 />
        </div>
      </div>
    </div>
  );
}

function Bubble8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[375px]" data-name="Bubble">
      <View17 />
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-end min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <Bubble />
      <BlockResolver />
      <Bubble1 />
      <Bubble2 />
      <BlockResolver2 />
      <Bubble3 />
      <BlockResolver3 />
      <Bubble4 />
      <Bubble5 />
      <BlockResolver5 />
      <Bubble6 />
      <BlockResolver6 />
      <Bubble7 />
      <Bubble8 />
      <BlockResolver6 />
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
      <Content12 />
      <HomeIndicator />
    </div>
  );
}