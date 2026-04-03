import svgPaths from "./svg-bpxh9py7us";
import imgContainer from "./dfbbd42c6d366f43509a4a20f795724ed764b0d7.png";

function Section() {
  return <div className="absolute bg-[rgba(26,26,26,0.3)] h-[592px] left-0 top-[860.33px] w-[1584.667px]" data-name="Section" />;
}

function Section1() {
  return <div className="absolute h-[376px] left-0 top-[1977.67px] w-[1584.667px]" data-name="Section" style={{ backgroundImage: "linear-gradient(166.652deg, rgb(99, 102, 241) 0%, rgba(99, 102, 241, 0.9) 50%, rgb(212, 175, 55) 100%)" }} />;
}

function Container() {
  return <div className="absolute h-[860.333px] left-0 top-0 w-[1584.667px]" data-name="Container" style={{ backgroundImage: "linear-gradient(151.502deg, rgba(99, 102, 241, 0.05) 0%, rgba(0, 0, 0, 0) 50%, rgba(212, 175, 55, 0.05) 100%)" }} />;
}

function Container1() {
  return (
    <div className="absolute h-[860.333px] left-0 opacity-30 top-0 w-[1584.667px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[87.333px] items-start left-[133.17px] top-[91.33px] w-[545.177px]" data-name="Text">
      <p className="bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[90px] not-italic relative shrink-0 text-[72px] text-[transparent] text-center tracking-[-1.8px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(99, 102, 241) 0%, rgb(105, 111, 232) 7.1429%, rgb(112, 118, 222) 14.286%, rgb(119, 125, 213) 21.429%, rgb(126, 132, 203) 28.571%, rgb(134, 138, 193) 35.714%, rgb(142, 143, 182) 42.857%, rgb(150, 148, 171) 50%, rgb(159, 153, 160) 57.143%, rgb(167, 157, 147) 64.286%, rgb(176, 161, 134) 71.429%, rgb(185, 165, 119) 78.571%, rgb(194, 168, 103) 85.714%, rgb(203, 172, 83) 92.857%, rgb(212, 175, 55) 100%)" }}>
        Next Generation
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[270px] left-0 top-0 w-[896px]" data-name="Heading 1">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[90px] left-[447.71px] not-italic text-[#fafafa] text-[72px] text-center top-[0.33px] tracking-[-1.8px] whitespace-nowrap">{`Strategic Capital for the `}</p>
      <Text />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[90px] left-[529.6px] not-italic text-[#fafafa] text-[72px] text-center top-[90.33px] tracking-[-1.8px] w-[467px]">{` of Software`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[65px] left-[64px] top-[302px] w-[768px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-[384.24px] not-italic text-[#a3a3a3] text-[20px] text-center top-[-1px] w-[759px]">We invest in and partner with technology companies building scalable, AI-driven systems designed for efficiency, ownership, and long-term advantage.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#6366f1] h-[60px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(99,102,241,0.2),0px_1px_2px_0px_rgba(99,102,241,0.2)] shrink-0 w-[238.771px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[119px] not-italic text-[18px] text-center text-white top-[15.67px] whitespace-nowrap">Request Partnership</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[61.333px] relative rounded-[8px] shrink-0 w-[163.792px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#262626] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[81.67px] not-italic text-[#fafafa] text-[18px] text-center top-[16.33px] whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[77.333px] items-start justify-center left-0 pt-[16px] px-[238.719px] top-[399px] w-[896px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[476.333px] left-[344.33px] top-[192px] w-[896px]" data-name="Container">
      <Heading />
      <Paragraph />
      <Container3 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute h-[860.333px] left-0 overflow-clip top-0 w-[1584.667px]" data-name="Section">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Home() {
  return (
    <div className="h-[2353.667px] relative shrink-0 w-[1584.667px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Section />
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#fafafa] text-[20px] top-0 whitespace-nowrap">M4B INVESTMENTS - FZCO</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#a3a3a3] text-[14px] top-[0.33px] whitespace-nowrap">Registration Number: 57796</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[52px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#a3a3a3] text-[14px] top-[0.33px] w-[404px]">This website is operated by M4B Investments. All information provided is for informational purposes only.</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[108px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Container7 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[92.573px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#a3a3a3] text-[14px] top-[0.33px] whitespace-nowrap">Privacy Policy</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[92.573px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Link />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[108px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container10 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[743.83px] not-italic text-[#a3a3a3] text-[12px] text-center top-[0.67px] whitespace-nowrap">© 2026 M4B Investments FZCO. All rights reserved.</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col h-[48.667px] items-start pt-[32.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#262626] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <Paragraph2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[284.667px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start pt-[48px] px-[24px] relative size-full">
        <Container5 />
        <Container11 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0a0a0a] h-[285.333px] relative shrink-0 w-[1584.667px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#262626] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[0.667px] px-[24.333px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div className="absolute content-stretch flex flex-col h-[2714.667px] items-start left-0 pt-[75.667px] top-0 w-[1584.667px]" data-name="Layout">
      <Home />
      <Footer />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-1/4 left-[10%] right-[10%] top-1/4" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 20">
        <g id="Group">
          <path d="M4 0H0V20H4V0Z" fill="var(--fill-0, #FAFAFA)" id="Vector" />
          <path d="M8 4H4V8H8V4Z" fill="var(--fill-0, #FAFAFA)" id="Vector_2" />
          <path d="M12 8H8V12H12V8Z" fill="var(--fill-0, #FAFAFA)" id="Vector_3" />
          <path d="M16 4H12V8H16V4Z" fill="var(--fill-0, #FAFAFA)" id="Vector_4" />
          <path d="M20 0H16V20H20V0Z" fill="var(--fill-0, #FAFAFA)" id="Vector_5" />
          <path d="M26 0H22V10H26V0Z" fill="var(--fill-0, #FAFAFA)" id="Vector_6" />
          <path d="M32 6H26V10H32V6Z" fill="var(--fill-0, #FAFAFA)" id="Vector_7" />
          <path d="M32 0H28V20H32V0Z" fill="var(--fill-0, #FAFAFA)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[26.25%_26.25%_46.25%_21.25%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 11">
        <g id="Group" opacity="0.6">
          <path d={svgPaths.p3cbff000} fill="var(--fill-0, #6366F1)" id="Vector" />
          <path d={svgPaths.p2b90f000} fill="var(--fill-0, #6366F1)" id="Vector_2" />
          <path d={svgPaths.p2082f400} fill="var(--fill-0, #6366F1)" id="Vector_3" />
          <path d={svgPaths.p81c7ea0} fill="var(--fill-0, #6366F1)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group />
        <Group1 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[82.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#fafafa] text-[18px] top-[-0.33px] tracking-[-0.45px] whitespace-nowrap">M4B</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[82.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#a3a3a3] text-[10px] top-[-0.33px] tracking-[1px] uppercase whitespace-nowrap">Investments</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] h-[43px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text1 />
        <Text2 />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[43px] relative shrink-0 w-[130.406px]" data-name="Logo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon />
        <Container13 />
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-[45.188px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#fafafa] text-[16px] top-[-1px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#a3a3a3] text-[16px] top-[-1px] whitespace-nowrap">Areas of Investment</p>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.406px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#a3a3a3] text-[16px] top-[-1px] whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <ListItem />
        <ListItem1 />
        <ListItem2 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 8.33333">
            <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[83.33%] left-1/2 right-1/2 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-50%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 3.33333">
            <path d="M0.833333 0.833333V2.5" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-[83.33%]" data-name="Vector">
        <div className="absolute inset-[-50%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 3.33333">
            <path d="M0.833333 0.833333V2.5" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.54%_73.58%_73.58%_20.54%]" data-name="Vector">
        <div className="absolute inset-[-70.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.84167 2.84167">
            <path d={svgPaths.p30e8c300} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[73.58%_20.54%_20.54%_73.58%]" data-name="Vector">
        <div className="absolute inset-[-70.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.84167 2.84167">
            <path d={svgPaths.p30e8c300} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[8.33%] right-[83.33%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 1.66667">
            <path d="M0.833333 0.833333H2.5" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[83.33%] right-[8.33%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 1.66667">
            <path d="M0.833333 0.833333H2.5" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[73.58%_73.58%_20.54%_20.54%]" data-name="Vector">
        <div className="absolute inset-[-70.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.84167 2.84167">
            <path d={svgPaths.p2061fa80} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.54%_20.54%_73.58%_73.58%]" data-name="Vector">
        <div className="absolute inset-[-70.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.84167 2.84167">
            <path d={svgPaths.p2061fa80} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonToggleTheme() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[36px]" data-name="Button - Toggle theme">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[36px] relative shrink-0 w-[372.063px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <List />
        <ButtonToggleTheme />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
          <Logo />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-[rgba(10,10,10,0.8)] content-stretch flex flex-col h-[75.667px] items-start left-0 pb-[0.667px] px-[24.333px] top-0 w-[1584.667px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Container12 />
    </div>
  );
}

export default function CompanyWebsiteDesign() {
  return (
    <div className="bg-[#0a0a0a] relative size-full" data-name="Company website design">
      <Layout />
      <Navigation />
    </div>
  );
}