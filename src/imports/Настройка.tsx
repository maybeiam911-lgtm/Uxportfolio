import svgPaths from "./svg-0q2gsetabt";

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
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[12px] pl-[19px] pr-[15px] pt-[14px] relative shrink-0" data-name="Status bar">
      <Content />
    </div>
  );
}

function Icon() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p181bd280} fill="var(--fill-0, #1D1E26)" fillRule="evenodd" id="Icon_2" />
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

function RightAccessory() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="RightAccessory">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="h-[44px] w-full" />
      </div>
    </div>
  );
}

function LeftTitleRight() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Left, Title, Right">
      <LeftAccessory />
      <RightAccessory />
    </div>
  );
}

function LeftHintTitle() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="LeftHintTitle">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[16px] py-[4px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#8f8f93] text-[16px] text-nowrap whitespace-pre">Шаг 3 из 3</p>
        </div>
      </div>
    </div>
  );
}

function LeftTitleRight1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Left, Title, Right">
      <LeftHintTitle />
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pb-[8px] pt-[4px] px-[16px] relative w-full">
          <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[40px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e26] text-[32px]">Режим приема</p>
        </div>
      </div>
    </div>
  );
}

function NavigationBars() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[375px]" data-name="NavigationBars">
      <StatusBar />
      <LeftTitleRight />
      <LeftTitleRight1 />
      <Title />
    </div>
  );
}

function Spacing() {
  return <div className="h-[48px] shrink-0 w-[16px]" data-name="Spacing" />;
}

function ActionBlock() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="ActionBlock">
      <Spacing />
    </div>
  );
}

function ContentTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="ContentTitle">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow h-[22px] leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d1e26] text-[16px] text-nowrap">Частота</p>
    </div>
  );
}

function CellContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="CellContent">
      <ContentTitle />
    </div>
  );
}

function ContentDetail() {
  return (
    <div className="content-stretch flex gap-[2px] h-[22px] items-center justify-end relative shrink-0" data-name="ContentDetail">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#4b4fbf] text-[16px] text-nowrap text-right whitespace-pre">Ежедневно</p>
    </div>
  );
}

function RightElement() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-end pl-[4px] pr-0 py-0 relative shrink-0" data-name="RightElement">
      <ContentDetail />
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center pl-0 pr-[16px] py-[12px] relative w-full">
          <CellContent />
          <div className="flex flex-row items-center self-stretch">
            <RightElement />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="ContentContainer">
      <Content1 />
    </div>
  );
}

function Cell() {
  return (
    <div className="bg-[#f5f7fb] content-stretch flex items-center relative shrink-0 w-full" data-name="Cell">
      <ActionBlock />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <ContentContainer />
      </div>
    </div>
  );
}

function Extra() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Extra">
      <Cell />
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[8px] pt-[4px] px-[16px] relative w-full">
          <Extra />
        </div>
      </div>
    </div>
  );
}

function GroupCell() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[375px]" data-name="GroupCell">
      <Content2 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[20px] items-start pb-[8px] pt-[16px] px-[16px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#8f8f93] text-[14px]">
            <p className="leading-[20px]">Установите время и дозировку</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GroupCell1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[375px]" data-name="GroupCell">
      <Header />
    </div>
  );
}

function SystemMinus() {
  return (
    <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="System / Minus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="System / Minus">
          <path clipRule="evenodd" d={svgPaths.p33b0ca00} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Remove() {
  return (
    <div className="absolute bg-[#ec545f] left-1/2 rounded-[16px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Remove">
      <SystemMinus />
    </div>
  );
}

function ActionCell() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ActionCell">
      <Remove />
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-[#e4e5f5] relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b4fbf] text-[14px] text-center text-nowrap whitespace-pre">09:00</p>
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Buttons">
      <Content3 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#4b4fbf] text-[16px] text-nowrap whitespace-pre">1</p>
    </div>
  );
}

function Extra1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Extra">
      <Text />
    </div>
  );
}

function CellContent1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-end min-h-px min-w-px overflow-clip relative shrink-0" data-name="CellContent">
      <Extra1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#4b4fbf] text-[16px] text-nowrap whitespace-pre">таблетка</p>
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cell">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-0 relative w-full">
          <ActionCell />
          <Buttons />
          <CellContent1 />
        </div>
      </div>
    </div>
  );
}

function Separator() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Separator">
      <div className="absolute bg-[#dddee3] bottom-0 left-0 right-0 top-1/2" data-name="Separator" />
    </div>
  );
}

function Separator1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Separator">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pl-[56px] pr-0 py-0 relative w-full">
          <Separator />
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="bg-[#f5f7fb] box-border content-stretch flex flex-col gap-[3px] items-start pb-0 pt-[4px] px-0 relative shrink-0 w-full" data-name="Cell">
      <Cell1 />
      <Separator1 />
    </div>
  );
}

function SystemMinus1() {
  return (
    <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="System / Minus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="System / Minus">
          <path clipRule="evenodd" d={svgPaths.p33b0ca00} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Remove1() {
  return (
    <div className="absolute bg-[#ec545f] left-1/2 rounded-[16px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Remove">
      <SystemMinus1 />
    </div>
  );
}

function ActionCell1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ActionCell">
      <Remove1 />
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-[#e4e5f5] relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b4fbf] text-[14px] text-center text-nowrap whitespace-pre">10:00</p>
        </div>
      </div>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Buttons">
      <Content4 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#4b4fbf] text-[16px] text-nowrap whitespace-pre">1</p>
    </div>
  );
}

function Extra2() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Extra">
      <Text1 />
    </div>
  );
}

function CellContent2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-end min-h-px min-w-px overflow-clip relative shrink-0" data-name="CellContent">
      <Extra2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#4b4fbf] text-[16px] text-nowrap whitespace-pre">таблетка</p>
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cell">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-0 relative w-full">
          <ActionCell1 />
          <Buttons2 />
          <CellContent2 />
        </div>
      </div>
    </div>
  );
}

function Separator2() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Separator">
      <div className="absolute bg-[#dddee3] bottom-0 left-0 right-0 top-1/2" data-name="Separator" />
    </div>
  );
}

function Separator3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Separator">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pl-[56px] pr-0 py-0 relative w-full">
          <Separator2 />
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="bg-[#f5f7fb] box-border content-stretch flex flex-col gap-[3px] items-start pb-0 pt-[4px] px-0 relative shrink-0 w-full" data-name="Cell">
      <Cell3 />
      <Separator3 />
    </div>
  );
}

function Spacing1() {
  return <div className="h-[48px] shrink-0 w-[16px]" data-name="Spacing" />;
}

function SystemPlus() {
  return (
    <div className="absolute inset-[16.67%] overflow-clip rounded-[0.5px]" data-name="System / Plus">
      <div className="absolute inset-[12.5%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p18652e00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2af0f7c0} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Insert() {
  return (
    <div className="absolute bg-[#6dc61c] left-[calc(50%-0.5px)] rounded-[16px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Insert">
      <SystemPlus />
    </div>
  );
}

function ActionCell2() {
  return (
    <div className="h-full relative shrink-0 w-[24px]" data-name="ActionCell">
      <Insert />
    </div>
  );
}

function Action() {
  return (
    <div className="box-border content-stretch flex h-[48px] items-center pl-0 pr-[16px] py-0 relative shrink-0" data-name="Action">
      <ActionCell2 />
    </div>
  );
}

function ActionBlock1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="ActionBlock">
      <Spacing1 />
      <Action />
    </div>
  );
}

function ContentTitle1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="ContentTitle">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow h-[22px] leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d1e26] text-[16px] text-nowrap">Добавить прием</p>
    </div>
  );
}

function CellContent3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="CellContent">
      <ContentTitle1 />
    </div>
  );
}

function Content5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center pl-0 pr-[16px] py-[12px] relative w-full">
          <CellContent3 />
        </div>
      </div>
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="ContentContainer">
      <Content5 />
    </div>
  );
}

function Cell5() {
  return (
    <div className="bg-[#f5f7fb] content-stretch flex items-center relative shrink-0 w-full" data-name="Cell">
      <ActionBlock1 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <ContentContainer1 />
      </div>
    </div>
  );
}

function Extra3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Extra">
      <Cell2 />
      <Cell4 />
      <Cell5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[8px] pt-[4px] px-[16px] relative w-full">
          <Extra3 />
        </div>
      </div>
    </div>
  );
}

function GroupLabel() {
  return (
    <div className="relative shrink-0 w-full" data-name="GroupLabel">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pb-[8px] pt-0 px-[16px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#8f8f93] text-[14px]">Запланируйте прием, чтобы получить уведомление в назначенное время</p>
        </div>
      </div>
    </div>
  );
}

function GroupCell2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[375px]" data-name="GroupCell">
      <Content6 />
      <GroupLabel />
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[20px] items-start pb-[8px] pt-[16px] px-[16px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#8f8f93] text-[14px]">
            <p className="leading-[20px]">Уведомления</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Spacing2() {
  return <div className="h-[48px] shrink-0 w-[16px]" data-name="Spacing" />;
}

function ActionBlock2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="ActionBlock">
      <Spacing2 />
    </div>
  );
}

function ContentTitle2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="ContentTitle">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow h-[22px] leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d1e26] text-[16px] text-nowrap">Напоминания</p>
    </div>
  );
}

function CellContent4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="CellContent">
      <ContentTitle2 />
    </div>
  );
}

function SystemUnfoldMore() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="System / Unfold More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="System / Unfold More">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p19dc2700} fill="var(--fill-0, #4B4FBF)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p10d09300} fill="var(--fill-0, #4B4FBF)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ContentDetail1() {
  return (
    <div className="content-stretch flex gap-[2px] h-[22px] items-center justify-end relative shrink-0" data-name="ContentDetail">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#4b4fbf] text-[16px] text-nowrap text-right whitespace-pre">за 15 минут</p>
      <SystemUnfoldMore />
    </div>
  );
}

function RightElement1() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-end pl-[4px] pr-0 py-0 relative shrink-0" data-name="RightElement">
      <ContentDetail1 />
    </div>
  );
}

function Content7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center pl-0 pr-[16px] py-[12px] relative w-full">
          <CellContent4 />
          <div className="flex flex-row items-center self-stretch">
            <RightElement1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentContainer2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="ContentContainer">
      <Content7 />
    </div>
  );
}

function Cell6() {
  return (
    <div className="bg-[#f5f7fb] content-stretch flex items-center relative shrink-0 w-full" data-name="Cell">
      <ActionBlock2 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <ContentContainer2 />
      </div>
    </div>
  );
}

function Extra4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Extra">
      <Cell6 />
    </div>
  );
}

function Content8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[8px] pt-[4px] px-[16px] relative w-full">
          <Extra4 />
        </div>
      </div>
    </div>
  );
}

function GroupLabel1() {
  return (
    <div className="relative shrink-0 w-full" data-name="GroupLabel">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pb-[8px] pt-0 px-[16px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#8f8f93] text-[14px]">Уведомление о приеме придет за указанное время</p>
        </div>
      </div>
    </div>
  );
}

function GroupCell3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="GroupCell">
      <Header1 />
      <Content8 />
      <GroupLabel1 />
    </div>
  );
}

function Header2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[20px] items-start pb-[8px] pt-[16px] px-[16px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#8f8f93] text-[14px]">
            <p className="leading-[20px]">Длительность приема</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Spacing3() {
  return <div className="h-[48px] shrink-0 w-[16px]" data-name="Spacing" />;
}

function ActionBlock3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="ActionBlock">
      <Spacing3 />
    </div>
  );
}

function ContentTitle3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="ContentTitle">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow h-[22px] leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d1e26] text-[16px] text-nowrap">Бессрочно</p>
    </div>
  );
}

function CellContent5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="CellContent">
      <ContentTitle3 />
    </div>
  );
}

function Switcher() {
  return (
    <div className="h-[30px] relative shrink-0 w-[51px]" data-name="Switcher">
      <div className="absolute bg-[#4b4fbf] inset-0 rounded-[16px]" />
      <div className="absolute bg-white inset-[10%_5.88%_10%_47.06%] rounded-[52px] shadow-[0px_3px_8px_0px_rgba(0,0,0,0.15),0px_3px_1px_0px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function RightElement2() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-end justify-center pl-[4px] pr-0 py-0 relative shrink-0 w-[62px]" data-name="RightElement">
      <Switcher />
    </div>
  );
}

function Content9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center pl-0 pr-[16px] py-[12px] relative w-full">
          <CellContent5 />
          <div className="flex flex-row items-center self-stretch">
            <RightElement2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentContainer3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="ContentContainer">
      <div aria-hidden="true" className="absolute border-[#dddee3] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <Content9 />
    </div>
  );
}

function Cell7() {
  return (
    <div className="bg-[#f5f7fb] content-stretch flex items-center relative shrink-0 w-full" data-name="Cell">
      <ActionBlock3 />
      <ContentContainer3 />
    </div>
  );
}

function Spacing4() {
  return <div className="h-[48px] shrink-0 w-[16px]" data-name="Spacing" />;
}

function ActionBlock4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="ActionBlock">
      <Spacing4 />
    </div>
  );
}

function ContentTitle4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="ContentTitle">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow h-[22px] leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d1e26] text-[16px] text-nowrap">Начало</p>
    </div>
  );
}

function CellContent6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="CellContent">
      <ContentTitle4 />
    </div>
  );
}

function SystemArrowRight() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="System / Arrow / Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="System / Arrow / Right">
          <path clipRule="evenodd" d={svgPaths.p3a7bb300} fill="var(--fill-0, #4B4FBF)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ContentDetail2() {
  return (
    <div className="content-stretch flex gap-[2px] h-[22px] items-center justify-end relative shrink-0" data-name="ContentDetail">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#4b4fbf] text-[16px] text-nowrap text-right whitespace-pre">24 окт. 2022</p>
      <SystemArrowRight />
    </div>
  );
}

function RightElement3() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-end pl-[4px] pr-0 py-0 relative shrink-0" data-name="RightElement">
      <ContentDetail2 />
    </div>
  );
}

function Content10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center pl-0 pr-[16px] py-[12px] relative w-full">
          <CellContent6 />
          <div className="flex flex-row items-center self-stretch">
            <RightElement3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentContainer4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="ContentContainer">
      <Content10 />
    </div>
  );
}

function Cell8() {
  return (
    <div className="bg-[#f5f7fb] content-stretch flex items-center relative shrink-0 w-full" data-name="Cell">
      <ActionBlock4 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <ContentContainer4 />
      </div>
    </div>
  );
}

function Extra5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Extra">
      <Cell7 />
      <Cell8 />
    </div>
  );
}

function Content11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[8px] pt-[4px] px-[16px] relative w-full">
          <Extra5 />
        </div>
      </div>
    </div>
  );
}

function GroupCell4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="GroupCell">
      <Header2 />
      <Content11 />
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <GroupCell />
      <GroupCell1 />
      <GroupCell2 />
      <GroupCell3 />
      <GroupCell4 />
    </div>
  );
}

function Content13() {
  return (
    <div className="bg-[#4b4fbf] relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[24px] py-[13px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Добавить препарат</p>
        </div>
      </div>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Buttons - 1">
      <Content13 />
    </div>
  );
}

function ButtonDiv() {
  return (
    <div className="relative shrink-0 w-full" data-name="ButtonDiv">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <Buttons1 />
        </div>
      </div>
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

function BottomBar() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0)] items-center relative shrink-0 to-[#ffffff]" data-name="BottomBar">
      <ButtonDiv />
      <HomeIndicator />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Настройка">
      <NavigationBars />
      <Content12 />
      <BottomBar />
    </div>
  );
}