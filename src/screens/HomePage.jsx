import { FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto container lg:px-28 py-10 bg-[#e5e5e5]">
      {/* hero-section-start */}
      <div className="flex lg:flex-row flex-col lg:items-start items-center lg:gap-52 gap-5">
        {/* card-start-here */}
        <div className="bg-white flex gap-10 lg:w-[450px] w-[350px] justify-center items-start lg:items-center flex-wrap lg:py-5 rounded-lg shadow-md p-1 lg:p-0">
          <div className="w-[60%] lg:w-auto">
            <h1 className="text-customPurple text-sm">Referal Earning</h1>
            <h2 className="text-3xl">₹ 2,500</h2>
          </div>
          <div className="">
            <h1 className="text-customPurple text-sm">Total Referal</h1>
            <h2 className="text-3xl">7</h2>
          </div>
          <div>
            <h1 className="text-customPurple text-sm">Wallet Balance</h1>
            <h2 className="text-3xl">₹ 500</h2>
          </div>
          <div>
            <button className="text-white bg-customPurple px-8 py-2 rounded-full">
              Withdraw Balance
            </button>
          </div>
        </div>
        {/* card-end-here */}
        {/* Refral card-start */}

        <div className="text-customPurple">
          <h1 className="text-2xl font-medium">Your Referral Code</h1>
          <div className="bg-gradient-to-tr from-[#ff864c] to-[#800180]  w-[350px] py-0.5 px-0.5 rounded-2xl flex justify-center items-center mt-4">
            <div className="list-none flex  w-[350px] py-4 items-center justify-around  bg-white rounded-2xl px-8">
              <li>E</li>
              <li>D</li>
              <li>C</li>
              <li>H</li>
              <li>5</li>
              <li>4</li>
            </div>
          </div>
        </div>
        {/* Refral card-end */}
      </div>
      {/* how-does-it-work-section-start */}
      <h1 className="text-2xl text-customPurple font-medium my-7 lg:mx-0 mx-4">
        How does it work ?
      </h1>

      <div className=" flex flex-wrap gap-5 w-auto md:w-[780px] justify-center lg:justify-start">
        {/* list-item-start-here */}
        <div className="flex items-center justify-start gap-5 w-[350px] px-5 py-3">
          <FaUsers size={40} fill="#800080" />
          <div>
            <h1 className="font-normal text-xl">Invite your Friends</h1>
            <h1 className="text-[#4c4c4c]">
              Share the link tutedede.com with your friends
            </h1>
          </div>
        </div>
        {/* list-item-end-here */}
        {/* list-item-start-here */}
        <div className="flex items-center justify-start gap-5  w-[350px] px-5 py-3">
          <FaUsers size={40} fill="#800080" />
          <div>
            <h1 className="font-normal text-xl">Friend purchases any course</h1>
            <h1 className="text-[#4c4c4c]">
              Using your REFFERAL CODE in the payment page
            </h1>
          </div>
        </div>
        {/* list-item-end-here */}
        {/* list-item-start-here */}
        <div className="flex items-center justify-start gap-5  w-[350px] px-5 py-3">
          <FaUsers size={40} fill="#800080" />
          <div>
            <h1 className="font-normal text-xl">
              You get 200 as refrral money
            </h1>
            <h1 className="text-[#4c4c4c]">
              On total purchase the friend makes into your wallet
            </h1>
          </div>
        </div>
        {/* list-item-end-here */}
        {/* list-item-start-here */}
        <div className="flex items-center justify-start gap-5 w-[350px] px-5 py-3">
          <FaUsers size={40} fill="#800080" />
          <div>
            <h1 className="font-normal text-xl">Your Friends get 200 off</h1>
            <h1 className="text-[#4c4c4c]">
              On his overall fee on successfull purchase using your refrral code
            </h1>
          </div>
        </div>
        {/* list-item-end-here */}
        {/* list-item-start-here */}
        <div className="flex items-center justify-start gap-5 w-[350px] px-5 py-3">
          <FaUsers size={40} fill="#800080" />
          <div>
            <h1 className="font-normal text-xl">Transfer money from wallet</h1>
            <h1 className="text-[#4c4c4c]">
              When the wallet balance reaches 200 or more you can withdraw it
            </h1>
          </div>
        </div>
        {/* list-item-end-here */}
      </div>
      {/* how-does-it-work-section-end */}
      <h2
        className="text-customPurple mt-10 cursor-grab sm:px-0 px-4"
        onClick={() => navigate("/FriendsRefer")}
      >
        Friends Who Enrolled
      </h2>
      <h2 className="text-customPurple mt-5 sm:px-0 px-4">
        Terms & Conditions
      </h2>

      {/* hero-section-end */}
    </div>
  );
};

export default HomePage;
