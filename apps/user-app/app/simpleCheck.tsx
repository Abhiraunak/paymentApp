"use client";

import { useBalance } from "@repo/store/useBalance";

export default function BalanceComponent() {
  const balance = useBalance();
  return (
    <div>
      Hi there {balance}
    </div>
  );
}
