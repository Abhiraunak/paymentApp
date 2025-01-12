import { SendCard } from "../../../components/SendCard";

export default function P2PTransfer(){
    return <div className="w-full">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            P2P Transfer
        </div>
        <div>
          <SendCard />
        </div>
    </div>
}