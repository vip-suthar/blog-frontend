import React from "react";

interface IntentSectionProps {}

const IntentSection: React.FC<IntentSectionProps> = ({}) => {
  return (
    <div className="flex flex-col md:flex-row bg-[#3D9BBD] p-8 m-8 mt-0 rounded-xl gap-4">
      <div className="w-full md:w-3/4">
        <h2 className="text-xl font-bold text-[#055479]">
          Why Satyagraha 2.0 ?
        </h2>
        <p className="text-white mt-4 text-justify text-sm leading-relaxed">
          Satyagraha 2.0 calls for a solution-driven movement to shape public
          discourse, influence policies, and build a community of informed,
          empathetic citizens addressing socio-political and economic
          challenges. We recognize the threat of authoritarianism undermining
          democratic governance, social cohesion, and economic stability through
          divisive tactics. Urging transparency, accountability, and civic
          engagement, we invite all Indians to join this historic, non-violent
          journey toward an inclusive and just India.
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <button className="w-full text-white border border-white rounded-lg px-4 py-1 cursor-pointer">
          More About Satyagrah 2.0
        </button>
        <button className="w-full text-white bg-[#055479] rounded-lg px-4 py-1 cursor-pointer">
          Write your Views
        </button>
      </div>
    </div>
  );
};

export default IntentSection;
