import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const ReferralPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-4">
      {/* go-back-button-start */}
      <div className="container mx-auto text-customPurple flex md:hidden items-center py-4 gap-2 font-medium text-base">
        <AiOutlineArrowLeft />
        <h1 onClick={() => navigate("/")} className="cursor-grab">
          go back
        </h1>
      </div>
      {/* go-back-button-end */}
      {/* section-1-start */}
      <div className="flex flex-row justify-between items-center">
        {/* left-side-start */}
        <div className=" flex justify-center items-center flex-col">
          <h1 className="text-customPurple text-base sm:text-xl">
            Your Referral Code
          </h1>
          <div className="flex flex-row list-none gap-3  sm:gap-5 px-2 py-3 rounded border  border-gray-300 shadow text-base sm:text-xl">
            <li>E</li>
            <li>D</li>
            <li>C</li>
            <li>H</li>
            <li>5</li>
            <li>4</li>
          </div>
        </div>
        {/* left-side-end */}
        <div className="bg-white p-2 md:p-5 md:px-6 rounded-2xl shadow-xl">
          <h1 className="text-customPurple text-base sm:text-xl">
            Wallet Balance{" "}
          </h1>
          <h2 className="text-xl">₹ 500</h2>
        </div>
      </div>
      {/* section-1-end */}
      {/* section-2-start */}
      <div className="flex mt-16 flex-col ">
        <h1 className="text-customPurple text-xl font-medium mb-6 pl-9 lg:pl-0">
          Friends who enrolled <span className="text-customGrey">(3)</span>
        </h1>
        <div className="flex flex-row gap-5 flex-wrap lg:flex-nowrap lg:items-start lg:justify-start items-center justify-center ">
          {/* card-start */}
          <div className="bg-gradient-to-r from-[#fa814f] to-[#8a0b7c] w-[400px] border text-white p-6 rounded-2xl">
            <div className="flex justify-between ">
              <h1 className="font-semibold text-lg">Dhiraj Saxsena</h1>
              <h2>14 Sep, 2022</h2>
            </div>
            <h1 className="mt-2">Courses Enrolled(6)</h1>
            <div className="flex flex-wrap">
              <div className="border px-2 rounded-xl text-[17px] m-2">
                UI/UX
              </div>
              <div className="border px-2 rounded-xl text-[17px] m-2">
                Photoshop
              </div>
              <div className="border px-2 rounded-xl text-[17px] m-2">
                Illustrator
              </div>
              <div className="border px-2 rounded-xl text-[17px] m-2">
                Python
              </div>
              <div className="border px-2 rounded-xl text-[17px] m-2">MERN</div>
              <div className="border px-2 rounded-xl text-[17px] m-2">Java</div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <h1 className="text-sm">Referral Amount</h1>
              <h2 className="text-2xl">₹ 185</h2>
            </div>
          </div>
          {/* card-end */}
          {/* card-start */}
          <div className="bg-gradient-to-r from-[#fa814f] to-[#8a0b7c] w-[400px] border text-white p-6 rounded-2xl">
            <div className="flex justify-between ">
              <h1 className="font-semibold text-lg">Subhash Mishra</h1>
              <h2>15 Sep, 2022</h2>
            </div>
            <h1 className="mt-2">Courses Enrolled(23)</h1>
            <div className="flex flex-wrap">
              <div className="border px-2 rounded-xl text-[17px] m-2">
                UI/UX
              </div>
              <div className="border px-2 rounded-xl text-[17px] m-2">
                Photoshop
              </div>
              <div className="border px-2 rounded-xl text-[17px] m-2">
                Illustrator
              </div>
              <div className="border px-2 rounded-xl text-[17px] m-2">
                Python
              </div>
              <div className="border px-2 rounded-xl text-[17px] m-2">MERN</div>
              <div className="border px-2 rounded-xl text-[17px] m-2">Java</div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <h1 className="text-sm">Referral Amount</h1>
              <h2 className="text-2xl">₹ 485</h2>
            </div>
          </div>
          {/* card-end */}
          {/* card-start */}
          <div className="bg-gradient-to-r from-[#fa814f] to-[#8a0b7c] w-[400px] border text-white p-6 rounded-2xl">
            <div className="flex justify-between ">
              <h1 className="font-semibold text-lg">Prafull Kumar</h1>
              <h2>14 Sep, 2022</h2>
            </div>
            <h1 className="mt-2">Courses Enrolled(23)</h1>
            <div className="flex flex-wrap">
              <div className="border px-2 rounded-xl text-[17px] m-2">
                UI/UX
              </div>
              <div className="border px-2 rounded-xl text-[17px] m-2">
                Photoshop
              </div>
              <div className="border px-2 rounded-xl text-[17px] m-2">
                Illustrator
              </div>
              <div className="border px-2 rounded-xl text-[17px] m-2">
                Python
              </div>
              <div className="border px-2 rounded-xl text-[17px] m-2">MERN</div>
              <div className="border px-2 rounded-xl text-[17px] m-2">Java</div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <h1 className="text-sm">Referral Amount</h1>
              <h2 className="text-2xl">₹ 485</h2>
            </div>
          </div>
          {/* card-end */}
        </div>
      </div>
      {/* section-2-end */}
      <h1 className="text-customPurple text-xl mt-11">Terms & Conditions</h1>
    </div>
  );
};

export default ReferralPage;
