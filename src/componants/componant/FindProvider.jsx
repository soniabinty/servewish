import React from "react";

const FindProvider = () => {
  return (
    <div className="flex items-center justify-center gap-8 flex-col md:flex-row md:mb-6  ">
      <div className="   ">
        <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-4 ">
          <div className="text-center  p-4 w-[120px] rounded-lg">
            <img
              className="w-30"
              src="https://i.ibb.co.com/gVDTPF0/images-q-tbn-ANd9-Gc-Tp-Fm-MGd-Popahu-Jj9oc7mv-Mhe-efnra-Hiffq-A-s.png"
              alt=""
            />
            <h3 className="text-xl font-bold">Shopping</h3>
          </div>

          <div className="text-center  p-4 w-[120px] rounded-lg">
            <img
              className="w-30"
              src="https://i.ibb.co.com/QJfwWdh/images-q-tbn-ANd9-Gc-Qa-B0-Q0ot-o0ae-N9-ESg-Ir-Bw-Vl-DEVr-DDBAWk-g-s.png"
              alt=""
            />
            <h3 className="text-xl font-bold">Resturants</h3>
          </div>
          <div className="text-center  p-4 w-[120px] rounded-lg">
            <img
              className="w-30"
              src="https://i.ibb.co.com/j4BhGFg/images-q-tbn-ANd9-Gc-SH359ym7nstt5q-IAd34-Ugzy-Rbt-Hr4-TTL9-Cu-Q-s.png"
              alt=""
            />
            <h3 className="text-xl font-bold">Transport</h3>
          </div>
          <div className="text-center  p-4 w-[120px] rounded-lg">
            <img
              className="w-30"
              src="https://i.ibb.co.com/wNdSPs1/images-q-tbn-ANd9-Gc-Sagdsq5-V8bmpush-Ss-NME5b3-Pj-Fc1-D3-JZZCng-s.png"
              alt=""
            />
            <h3 className="text-xl font-bold">Beauty & Spa</h3>
          </div>

          <div className="text-center  p-4 w-[120px] rounded-lg">
            <img
              className="w-30"
              src="https://i.ibb.co.com/djWFwsk/images-q-tbn-ANd9-Gc-Tj5-Io4-Hr4-Qocji8-FVM-Px-QQlh-Ln-JF-HM0-Hr-Q-s.png"
              alt=""
            />
            <h3 className="text-xl font-bold">Home Service</h3>
          </div>
          <div className="text-center p-4 w-[120px] rounded-lg">
            <img
              className="w-30"
              src="https://i.ibb.co.com/9wFFNNn/images-q-tbn-ANd9-Gc-RJb-Be5dye-FVcp-VVxxv-Vo-NFd-QXjrf-ICqnd8-HQ-s.png"
              alt=""
            />
            <h3 className="text-xl font-bold">Medical Issue</h3>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-4/5">
        <h1 className="text-5xl font-bold ">
          What can a service provider do for you?
        </h1>
        <p className="py-6 ">
          Generate more leads, increase revenue, and delight with one of our
          vetted and proven agencies or service providers. Get help with
          shopping, home services, sales enablement and so much more.
        </p>
        <button className="btn hover:bg-green-900 bg-green-900 text-white">Find a provider</button>
      </div>
    </div>
  );
};

export default FindProvider;
