import { useState } from "react";
import AdsList from "./components/ads-list";

const Advertisement = () => {
  const [tab, setTab] = useState("text");

  const tabs = [
    {
      id: "text",
      label: "Carousel text",
      svgPath: (
        <>
          <path
            strokeDasharray={64}
            strokeDashoffset={64}
            d="M20 5v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.6s"
              values="64;0"
            />
          </path>
          <path strokeDasharray={10} strokeDashoffset={10} d="M8 8h8">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.7s"
              dur="0.2s"
              values="10;0"
            />
          </path>
          <path strokeDasharray={10} strokeDashoffset={10} d="M8 12h8">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.9s"
              dur="0.2s"
              values="10;0"
            />
          </path>
          <path strokeDasharray={6} strokeDashoffset={6} d="M8 16h5">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="1.1s"
              dur="0.2s"
              values="6;0"
            />
          </path>
        </>
      ),
    },
    {
      id: "image",
      label: "Carousel images",
      svgPath: (
        <>
          <path
            strokeDasharray={72}
            strokeDashoffset={72}
            d="M3 14v-9h18v14h-18v-5"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.6s"
              values="72;0"
            />
          </path>
          <path
            strokeDasharray={24}
            strokeDashoffset={24}
            strokeWidth={1}
            d="M3 16l4 -3l3 2l6 -5l5 4"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.6s"
              dur="0.4s"
              values="24;0"
            />
          </path>
        </>
      ),
    },
  ];

  const renderTabButton = (tabInfo) => (
    <button
      key={tabInfo.id}
      onClick={() => setTab(tabInfo.id)}
      className={`inline-flex items-center h-10 px-2 py-2 -mb-px text-center ${
        tab === tabInfo.id
          ? "text-blue-600 border-blue-500"
          : "text-gray-700 hover:border-gray-400"
      } bg-transparent border-b-2 sm:px-4 whitespace-nowrap focus:outline-none`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className="size-7"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          {tabInfo.svgPath}
        </g>
      </svg>
      <span className="mx-1 text-sm sm:text-base">{tabInfo.label}</span>
    </button>
  );

  return (
    <div className="p-3">
      <div className="flex overflow-x-auto gap-x-2 overflow-y-hidden whitespace-nowrap border-gray-700">
        {tabs.map(renderTabButton)}
      </div>
      <hr className="mt-2" />
      <div className="mt-2">
        <AdsList tab={tab} />
      </div>
    </div>
  );
};

export default Advertisement;
