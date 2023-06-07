import react from "react";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const MyAccount = () => {
    const router = useRouter();
  useEffect(() => {
    if(!localStorage.getItem("token")){
        router.push('/');
    }
  },[router]);              {/* router.query */}

  return (
    <div>
      <div className=" flex justify-center text-black text-lg font-bold bg-orange-50  py-2 mx-20 shadow-lg">
        My Account
      </div>
      <div className="mx-auto h-96"></div>
    </div>
  );
};

export default MyAccount;
