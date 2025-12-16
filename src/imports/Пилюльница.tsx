import svgPaths from "./svg-iawqu4gkqf";

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
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#8f8f93] text-[16px] text-nowrap whitespace-pre">Шаг 2 из 3</p>
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
          <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[40px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e26] text-[32px]">Единица дозировки</p>
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

function GroupLabel() {
  return (
    <div className="relative shrink-0 w-full" data-name="GroupLabel">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pb-[8px] pt-[4px] px-[16px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e26] text-[16px]">Выберите единицу измерения дозировки препарата</p>
        </div>
      </div>
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
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow h-[22px] leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d1e26] text-[16px] text-nowrap">мг</p>
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

function SystemArrowRight() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="System / Arrow / Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="System / Arrow / Right">
          <path clipRule="evenodd" d={svgPaths.p3b14270} fill="var(--fill-0, #8F8F93)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ContentDetail() {
  return (
    <div className="content-stretch flex gap-[2px] h-[22px] items-center justify-end relative shrink-0" data-name="ContentDetail">
      <SystemArrowRight />
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
      <div aria-hidden="true" className="absolute border-[#dddee3] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
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

function Spacing1() {
  return <div className="h-[48px] shrink-0 w-[16px]" data-name="Spacing" />;
}

function ActionBlock1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="ActionBlock">
      <Spacing1 />
    </div>
  );
}

function ContentTitle1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="ContentTitle">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow h-[22px] leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d1e26] text-[16px] text-nowrap">мкг</p>
    </div>
  );
}

function CellContent1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="CellContent">
      <ContentTitle1 />
    </div>
  );
}

function SystemArrowRight1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="System / Arrow / Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="System / Arrow / Right">
          <path clipRule="evenodd" d={svgPaths.p3b14270} fill="var(--fill-0, #8F8F93)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ContentDetail1() {
  return (
    <div className="content-stretch flex gap-[2px] h-[22px] items-center justify-end relative shrink-0" data-name="ContentDetail">
      <SystemArrowRight1 />
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

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center pl-0 pr-[16px] py-[12px] relative w-full">
          <CellContent1 />
          <div className="flex flex-row items-center self-stretch">
            <RightElement1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="ContentContainer">
      <div aria-hidden="true" className="absolute border-[#dddee3] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <Content2 />
    </div>
  );
}

function Cell1() {
  return (
    <div className="bg-[#f5f7fb] content-stretch flex items-center relative shrink-0 w-full" data-name="Cell">
      <ActionBlock1 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <ContentContainer1 />
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
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow h-[22px] leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d1e26] text-[16px] text-nowrap">мл</p>
    </div>
  );
}

function CellContent2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="CellContent">
      <ContentTitle2 />
    </div>
  );
}

function SystemArrowRight2() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="System / Arrow / Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="System / Arrow / Right">
          <path clipRule="evenodd" d={svgPaths.p3b14270} fill="var(--fill-0, #8F8F93)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ContentDetail2() {
  return (
    <div className="content-stretch flex gap-[2px] h-[22px] items-center justify-end relative shrink-0" data-name="ContentDetail">
      <SystemArrowRight2 />
    </div>
  );
}

function RightElement2() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-end pl-[4px] pr-0 py-0 relative shrink-0" data-name="RightElement">
      <ContentDetail2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center pl-0 pr-[16px] py-[12px] relative w-full">
          <CellContent2 />
          <div className="flex flex-row items-center self-stretch">
            <RightElement2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentContainer2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="ContentContainer">
      <div aria-hidden="true" className="absolute border-[#dddee3] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <Content3 />
    </div>
  );
}

function Cell2() {
  return (
    <div className="bg-[#f5f7fb] content-stretch flex items-center relative shrink-0 w-full" data-name="Cell">
      <ActionBlock2 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <ContentContainer2 />
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
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow h-[22px] leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d1e26] text-[16px] text-nowrap">мг/мл</p>
    </div>
  );
}

function CellContent3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="CellContent">
      <ContentTitle3 />
    </div>
  );
}

function SystemArrowRight3() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="System / Arrow / Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="System / Arrow / Right">
          <path clipRule="evenodd" d={svgPaths.p3b14270} fill="var(--fill-0, #8F8F93)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ContentDetail3() {
  return (
    <div className="content-stretch flex gap-[2px] h-[22px] items-center justify-end relative shrink-0" data-name="ContentDetail">
      <SystemArrowRight3 />
    </div>
  );
}

function RightElement3() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-end pl-[4px] pr-0 py-0 relative shrink-0" data-name="RightElement">
      <ContentDetail3 />
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center pl-0 pr-[16px] py-[12px] relative w-full">
          <CellContent3 />
          <div className="flex flex-row items-center self-stretch">
            <RightElement3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentContainer3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="ContentContainer">
      <div aria-hidden="true" className="absolute border-[#dddee3] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <Content4 />
    </div>
  );
}

function Cell3() {
  return (
    <div className="bg-[#f5f7fb] content-stretch flex items-center relative shrink-0 w-full" data-name="Cell">
      <ActionBlock3 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <ContentContainer3 />
      </div>
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
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow h-[22px] leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d1e26] text-[16px] text-nowrap">мл/мг</p>
    </div>
  );
}

function CellContent4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="CellContent">
      <ContentTitle4 />
    </div>
  );
}

function SystemArrowRight4() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="System / Arrow / Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="System / Arrow / Right">
          <path clipRule="evenodd" d={svgPaths.p3b14270} fill="var(--fill-0, #8F8F93)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ContentDetail4() {
  return (
    <div className="content-stretch flex gap-[2px] h-[22px] items-center justify-end relative shrink-0" data-name="ContentDetail">
      <SystemArrowRight4 />
    </div>
  );
}

function RightElement4() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-end pl-[4px] pr-0 py-0 relative shrink-0" data-name="RightElement">
      <ContentDetail4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center pl-0 pr-[16px] py-[12px] relative w-full">
          <CellContent4 />
          <div className="flex flex-row items-center self-stretch">
            <RightElement4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentContainer4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="ContentContainer">
      <div aria-hidden="true" className="absolute border-[#dddee3] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <Content5 />
    </div>
  );
}

function Cell4() {
  return (
    <div className="bg-[#f5f7fb] content-stretch flex items-center relative shrink-0 w-full" data-name="Cell">
      <ActionBlock4 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <ContentContainer4 />
      </div>
    </div>
  );
}

function Spacing5() {
  return <div className="h-[48px] shrink-0 w-[16px]" data-name="Spacing" />;
}

function ActionBlock5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="ActionBlock">
      <Spacing5 />
    </div>
  );
}

function ContentTitle5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="ContentTitle">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow h-[22px] leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d1e26] text-[16px] text-nowrap">ед</p>
    </div>
  );
}

function CellContent5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="CellContent">
      <ContentTitle5 />
    </div>
  );
}

function SystemArrowRight5() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="System / Arrow / Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="System / Arrow / Right">
          <path clipRule="evenodd" d={svgPaths.p3b14270} fill="var(--fill-0, #8F8F93)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ContentDetail5() {
  return (
    <div className="content-stretch flex gap-[2px] h-[22px] items-center justify-end relative shrink-0" data-name="ContentDetail">
      <SystemArrowRight5 />
    </div>
  );
}

function RightElement5() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-end pl-[4px] pr-0 py-0 relative shrink-0" data-name="RightElement">
      <ContentDetail5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center pl-0 pr-[16px] py-[12px] relative w-full">
          <CellContent5 />
          <div className="flex flex-row items-center self-stretch">
            <RightElement5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentContainer5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="ContentContainer">
      <div aria-hidden="true" className="absolute border-[#dddee3] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <Content6 />
    </div>
  );
}

function Cell5() {
  return (
    <div className="bg-[#f5f7fb] content-stretch flex items-center relative shrink-0 w-full" data-name="Cell">
      <ActionBlock5 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <ContentContainer5 />
      </div>
    </div>
  );
}

function Spacing6() {
  return <div className="h-[48px] shrink-0 w-[16px]" data-name="Spacing" />;
}

function ActionBlock6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="ActionBlock">
      <Spacing6 />
    </div>
  );
}

function ContentTitle6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="ContentTitle">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow h-[22px] leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d1e26] text-[16px] text-nowrap">гр</p>
    </div>
  );
}

function CellContent6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="CellContent">
      <ContentTitle6 />
    </div>
  );
}

function SystemArrowRight6() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="System / Arrow / Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="System / Arrow / Right">
          <path clipRule="evenodd" d={svgPaths.p3b14270} fill="var(--fill-0, #8F8F93)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ContentDetail6() {
  return (
    <div className="content-stretch flex gap-[2px] h-[22px] items-center justify-end relative shrink-0" data-name="ContentDetail">
      <SystemArrowRight6 />
    </div>
  );
}

function RightElement6() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-end pl-[4px] pr-0 py-0 relative shrink-0" data-name="RightElement">
      <ContentDetail6 />
    </div>
  );
}

function Content7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center pl-0 pr-[16px] py-[12px] relative w-full">
          <CellContent6 />
          <div className="flex flex-row items-center self-stretch">
            <RightElement6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentContainer6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="ContentContainer">
      <Content7 />
    </div>
  );
}

function Cell6() {
  return (
    <div className="bg-[#f5f7fb] content-stretch flex items-center relative shrink-0 w-full" data-name="Cell">
      <ActionBlock6 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <ContentContainer6 />
      </div>
    </div>
  );
}

function Extra() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Extra">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
      <Cell6 />
    </div>
  );
}

function Content8() {
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
      <Content8 />
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-0 pt-[8px] px-0 relative shrink-0" data-name="Content">
      <GroupCell />
    </div>
  );
}

function Content10() {
  return (
    <div className="bg-[#e4e5f5] relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[13px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#4b4fbf] text-[16px] text-center text-nowrap whitespace-pre">Пропустить</p>
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Buttons">
      <Content10 />
    </div>
  );
}

function ButtonDiv() {
  return (
    <div className="relative shrink-0 w-full" data-name="ButtonDiv">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <Buttons />
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
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Пилюльница">
      <NavigationBars />
      <GroupLabel />
      <Content9 />
      <BottomBar />
    </div>
  );
}